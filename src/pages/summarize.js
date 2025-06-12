import { useState } from 'react';

export default function SummarizePage() {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    setLoading(true);
    setSummary('');
    try {
      const res = await fetch('/api/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: `Summarize this:\n${text}` }),
      });
      const data = await res.json();
      setSummary(data.summary || '⚠️ No summary received');
    } catch (err) {
      setSummary('❌ Failed to fetch summary');
    }
    setLoading(false);
  };

  return (
    <section className="bg-blue-500 hover:bg-purple-600 transition-colors duration-700 ease-in-out min-h-screen flex items-center justify-center">
      <div style={{
        maxWidth: 700,
        margin: '40px auto',
        padding: 20,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        fontFamily: 'Arial, sans-serif',
      }}>
        <h2 style={{ marginBottom: 20, color: '#333' }}>📄 Summarize Text</h2>

        <textarea
          rows={10}
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: 4,
            border: '1px solid #ccc',
            fontSize: 16,
            resize: 'vertical',
            transition: 'border-color 0.3s',
          }}
          placeholder="Enter text to summarize..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={(e) => e.target.style.borderColor = '#0070f3'}
          onBlur={(e) => e.target.style.borderColor = '#ccc'}
        />

        <button
          onClick={handleSummarize}
          disabled={loading}
          style={{
            marginTop: 10,
            padding: '12px 20px',
            backgroundColor: loading ? '#0070f3aa' : '#0070f3',
            color: '#fff',
            fontSize: 16,
            border: 'none',
            borderRadius: 4,
            cursor: loading ? 'default' : 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => !loading && (e.target.style.backgroundColor = '#005bb5')}
          onMouseLeave={(e) => !loading && (e.target.style.backgroundColor = '#0070f3')}
        >
          {loading ? 'Summarizing...' : 'Summarize'}
        </button>

        {summary && (
          <div style={{
            marginTop: 20,
            padding: 20,
            backgroundColor: '#fff',
            borderRadius: 4,
            border: '1px solid #ddd',
            lineHeight: 1.5,
            whiteSpace: 'pre-wrap',
          }}>
            <h3 style={{ marginBottom: 10 }}>📝 Summary:</h3>
            <p style={{ margin: 0 }}>{summary}</p>
          </div>
        )}
      </div>
    </section>
  );
}