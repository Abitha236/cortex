// components/AIMeetingSummarizer.js
import React, { useState } from 'react';
import axios from 'axios';

export default function AIMeetingSummarizer() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setSummary('');
    setError('');

    try {
      const formData = new FormData();
      if (file) formData.append('file', file);
      else formData.append('text', text);

      console.log('Submitting:', file ? 'file' : 'text');
      const res = await axios.post('/api/summarize', formData);
      console.log('Response:', res.status, res.data);

      if (res.data.summary) setSummary(res.data.summary);
      else setError(res.data.error || 'No summary returned.');
    } catch (err) {
      console.error('Summarization error:', err.response?.data || err);
      setError('Summarization error — check console.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={e => {
          setFile(null);
          setText(e.target.value);
        }}
        placeholder="Paste text here..."
      />
      <input
        type="file"
        accept=".pdf,.txt"
        onChange={e => {
          setText('');
          setFile(e.target.files ? e.target.files[0] : null);
        }}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Summarizing…' : 'Summarize'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {summary && (
        <div>
          <h2>Summary:</h2>
          <p>{summary}</p>
        </div>
      )}
    </form>
  );
}
