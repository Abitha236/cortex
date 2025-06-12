// pages/api/summarize.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Only POST allowed' });

  const { text } = req.body;
  if (!text || text.trim().length === 0)
    return res.status(400).json({ error: 'Text input is required' });

  try {
    const { data } = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: `Summarize:\n\n${text}` }],
      },
      {
        headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
      }
    );
    return res.status(200).json({ summary: data.choices[0].message.content });
  } catch (err) {
    console.error('OpenAI call error:', err.response?.data || err);
    return res.status(500).json({ error: 'AI summarization failed' });
  }
}
