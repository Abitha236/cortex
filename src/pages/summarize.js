import React, { useState } from 'react';
import { callOpenAI } from '@/utils/aiHandler';

const SummarizePage = () => {
  const [input, setInput] = useState('');
  const [summary, setSummary] = useState('');
  const [tags, setTags] = useState('');

  const handleSummarize = async () => {
    const prompt = `Summarize this in 5 bullet points:\n\n${input}`;
    const result = await callOpenAI(prompt);
    setSummary(result);
  };

  const handleTag = async () => {
    const prompt = `Extract 3 to 4 important keywords from this text:\n\n${input}`;
    const result = await callOpenAI(prompt);
    setTags(result);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Summarize & Tag Your Text</h1>
      
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={8}
        placeholder="Enter your text here..."
        className="w-full p-3 border rounded mb-4"
      />

      <div className="flex gap-4 mb-4">
        <button onClick={handleSummarize} className="bg-green-600 text-white px-4 py-2 rounded">
          Summarize
        </button>
        <button onClick={handleTag} className="bg-purple-600 text-white px-4 py-2 rounded">
          Tag
        </button>
      </div>

      {summary && (
        <div className="bg-gray-100 p-3 rounded mb-4">
          <h2 className="font-bold">Summary:</h2>
          <div dangerouslySetInnerHTML={{ __html: summary.replace(/\n/g, "<br/>") }} />
        </div>
      )}

      {tags && (
        <div className="bg-yellow-100 p-3 rounded">
          <h2 className="font-bold">Tags:</h2>
          <p>{tags}</p>
        </div>
      )}
    </div>
  );
};

export default SummarizePage;