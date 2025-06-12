// pages/api/summarize.js
import fs from 'fs';
import formidable from 'formidable';
import * as pdfjs from 'pdfjs-dist/legacy/build/pdf';
import axios from 'axios';

// Disable Next.js default body parsing so formidable can parse multipart/form-data
export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  let fields, files;
  try {
    ({ fields, files } = await new Promise((resolve, reject) => {
      const form = new formidable.IncomingForm();
      form.parse(req, (err, f, fi) =>
        err ? reject(err) : resolve({ fields: f, files: fi })
      );
    }));
  } catch (err) {
    console.error('Form.parse error:', err);
    return res.status(500).json({ error: 'Failed to parse input' });
  }

  console.log('fields:', fields, 'files:', files);

  let text = fields.text?.toString() || '';
  if (files.file) {
    const buffer = await fs.promises.readFile(files.file.filepath);
    const pdf = await pdfjs.getDocument({ data: buffer }).promise;
    const pagesText = await Promise.all(
      Array.from({ length: pdf.numPages }, (_, i) =>
        pdf.getPage(i + 1)
          .then(p => p.getTextContent())
          .then(tc => tc.items.map(it => it.str).join(' '))
      )
    );
    text = pagesText.join('\n');
  }

  if (!text) return res.status(400).json({ error: 'No text or file provided.' });

  try {
    const aiRes = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: `Summarize:\n\n${text}` }],
      },
      { headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` } }
    );
    return res.status(200).json({ summary: aiRes.data.choices[0].message.content });
  } catch (e) {
    console.error('OpenAI error:', e.response?.data || e);
    return res.status(500).json({ error: 'Summarization failed.' });
  }
}
