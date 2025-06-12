import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { messages } = req.body;

  if (!Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid message format" });
  }

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",
        messages: messages,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENROUTER_API_KEY}`,
          "HTTP-Referer": 'https://cortex-b6tk.vercel.app',
          "X-Title": "Cortex AI Workspace",
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error("OpenRouter error:", error.response?.data || error.message);
    res.status(500).json({ error: "OpenRouter API error" });
  }
}
