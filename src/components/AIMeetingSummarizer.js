import React, { useState } from 'react';
import axios from 'axios';

export default function AIMeetingSummarizer() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setSummary(''); // clear previous

    try {
      const formData = new FormData();
      if (file) formData.append('file', file);
      else formData.append('text', text);
      
      console.log('Submitting formData entries:');
      for (let [k, v] of formData.entries()) {
        console.log(k, v);
      }

      const res = await axios.post('/api/summarize', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      console.log('API response:', res.status, res.data);
      if (res.data.summary) {
        setSummary(res.data.summary);
      } else {
        setSummary('No summary received.');
      }

    } catch (err) {
      console.error('Summarization error:', err);
      setSummary('Error summarizing — check console.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Paste text here..."
      />
      <input
        type="file"
        accept=".pdf,.txt"
        onChange={e => setFile(e.target.files[0])}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Summarizing…' : 'Summarize'}
      </button>
      {summary && (
        <div>
          <h2>Summary:</h2>
          <p>{summary}</p>
        </div>
      )}
    </form>
  );
}
