export const config = { api: { bodyParser: false } };

import fs from 'fs';
import * as pdfjs from 'pdfjs-dist/legacy/build/pdf';
import formidable from 'formidable';
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const form = formidable({ maxFileSize: 50 * 1024 * 1024 });

  let fields, files;
  try {
    ({ fields, files } = await new Promise((resolve, reject) => {
      form.parse(req, (err, f, fi) => err ? reject(err) : resolve({ fields: f, files: fi }));
    }));
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }

  let text = fields.text?.toString();
  if (files?.file) {
    const file = files.file;
    const arrayBuffer = await fs.promises.readFile(file.filepath);
    const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
    const pages = await Promise.all(
      Array.from({ length: pdf.numPages }, (_, i) =>
        pdf.getPage(i + 1).then(p => p.getTextContent())
      )
    );
    text = pages.map(p => p.items.map(i => i.str).join(' ')).join('\n');
  }

  if (!text) return res.status(400).json({ error: 'No text or file provided.' });

  try {
    const aiRes = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: `Summarize:\n\n${text}` }]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    res.status(200).json({ summary: aiRes.data.choices[0].message.content });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Summarization failed.' });
  }
}
