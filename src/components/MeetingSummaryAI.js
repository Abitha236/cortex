import React, { useState, useEffect } from 'react';

const MeetingSummaryAI = () => {
  const [transcript, setTranscript] = useState("");
  const [summary, setSummary] = useState("");
  const [wordCount, setWordCount] = useState(0);

 
  useEffect(() => {
    if (transcript.length > 30) {
      const timer = setTimeout(() => {
        setSummary("Summary: Key topics were project deadlines, team roles, and upcoming releases.");
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setSummary("");
    }
  }, [transcript]);

  useEffect(() => {
    const words = transcript.trim().split(/\s+/);
    setWordCount(words.filter(Boolean).length);
  }, [transcript]);

  return (
    <div className="ai-box">
      <h2>AI Meeting Summarizer</h2>
      <textarea
        rows="5"
        placeholder="Paste your meeting transcript..."
        value={transcript}
        onChange={(e) => setTranscript(e.target.value)}
      />
      <p><strong>Word Count:</strong> {wordCount}</p>
      <pre>{summary}</pre>
    </div>
  );
};

export default MeetingSummaryAI;