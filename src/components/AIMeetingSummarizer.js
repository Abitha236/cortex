import React, { useState } from 'react';
import { callOpenAI } from '@/utils/aiHandler';

const AIMeetingSummarizer = () => {
  const [transcript, setTranscript] = useState("");
  const [summary, setSummary] = useState("");

  const handleSummarize = async () => {
    const prompt = `Summarize this meeting:\n\n${transcript}`;
    const result = await callOpenAI(prompt);
    setSummary(result);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">AI Meeting Summarizer</h2>
      <textarea
        value={transcript}
        onChange={(e) => setTranscript(e.target.value)}
        rows={6}
        placeholder="Paste your meeting transcript here..."
        className="w-full border p-2 rounded"
      />
      <button
        onClick={handleSummarize}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 mt-2 rounded"
      >
        Generate Summary
      </button>
      {summary && (
        <div className="mt-4 bg-gray-100 p-2 rounded text-black">
          <strong>Summary:</strong>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
};

export default AIMeetingSummarizer;
