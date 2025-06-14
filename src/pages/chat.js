import { useState } from "react";
import { saveChatData } from "../utils/firestoreUtils";

export default function CortexChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const newHistory = [...messages, userMessage];
    setMessages(newHistory);
    setLoading(true);
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newHistory }),
      });

      const data = await res.json();
      const aiResponse = data.choices?.[0]?.message?.content || "No reply.";
      const aiMessage = { role: "assistant", content: aiResponse };

      setMessages([...newHistory, aiMessage]);

      // ✅ Save chat input/output to Firestore
      await saveChatData(input, aiResponse);

    } catch (error) {
      const errorMsg = "❌ Error: Failed to fetch response.";
      setMessages([...newHistory, { role: "assistant", content: errorMsg }]);
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1>Cortex AI Chat</h1>

      <div style={{ maxHeight: 300, overflowY: "auto", marginBottom: 10 }}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              background: msg.role === "user" ? "#d4edda" : "#e2e3e5",
              color: msg.role === "user" ? "#155724" : "#1c1c1c",
              marginBottom: 8,
              padding: 10,
              borderRadius: 8,
              textAlign: msg.role === "user" ? "right" : "left",
            }}
          >
            <strong>{msg.role === "user" ? "You" : "AI"}:</strong> {msg.content}
          </div>
        ))}
        {loading && <div>AI is thinking...</div>}
      </div>

      <form onSubmit={handleSubmit}>
        <textarea
          rows={3}
          style={{ width: "100%", padding: 10, borderRadius: 6 }}
          placeholder="Ask Cortex AI..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          style={{
            marginTop: 10,
            padding: "10px 20px",
            border: "none",
            backgroundColor: "#016b59",
            color: "white",
            borderRadius: 6,
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}