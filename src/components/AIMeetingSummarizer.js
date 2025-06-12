import React, { useState } from 'react';
import axios from 'axios';

const AIMeetingSummarizer = () => {
  const [transcript, setTranscript] = useState('');
  const [summary, setSummary] = useState('');

  const summarize = async () => {
    const res = await axios.post('/api/summarize', { prompt: transcript });
    setSummary(res.data.summary);
  };

  return (
    <div>
      {/* input and UI */}
      <button onClick={summarize}>Summarize</button>
      <p>{summary}</p>
    </div>
  );
};

export default AIMeetingSummarizer;
