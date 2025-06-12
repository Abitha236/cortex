import React, { useState } from 'react';
import axios from 'axios';

export default function AIMeetingSummarizer() {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSummary('');
    setError('');

    if (!text.trim()) {
      setError('Please enter some text to summarize.');
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post('/api/summarize', { text });
      console.log('Backend response:', res.status, res.data);
      res.data.summary
        ? setSummary(res.data.summary)
        : setError(res.data.error || 'No summary returned.');
    } catch (err) {
      console.error('Summarization error:', err.response?.data || err.message);
      setError('Summarization failed — check console.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste text here..."
        rows={6}
        style={{ width: '100%', marginBottom: 10 }}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Summarizing…' : 'Summarize'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {summary && (
        <div style={{ marginTop: 20 }}>
          <h2>Summary:</h2>
          <p>{summary}</p>
        </div>
      )}
    </form>
  );
}
