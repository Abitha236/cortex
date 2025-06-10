import React, { useState, useEffect } from 'react';

const documents = [
  { id: 1, title: "Project Plan Q2", content: "Timelines for Q2." },
  { id: 2, title: "Client Feedback", content: "Timely updates, clear UI." },
  { id: 3, title: "Bug Report", content: "User login timeout issue." },
  { id: 4, title: "Launch Checklist", content: "DevOps, QA, and marketing." },
];

const SemanticSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState("Waiting for input...");
  const [loading, setLoading] = useState(false);
  const [searchTime, setSearchTime] = useState("");

  useEffect(() => {
    if (query.length > 3) {
      setLoading(true);
      setStatus("Searching...");
      const timer = setTimeout(() => {
        const filtered = documents.filter(doc =>
          doc.title.toLowerCase().includes(query.toLowerCase()) ||
          doc.content.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
        setStatus("Results ready");
        setLoading(false);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      setResults([]);
      setStatus("Enter at least 4 characters.");
    }
  }, [query]);

  useEffect(() => {
    if (!loading && query.length > 3) {
      setSearchTime(new Date().toLocaleTimeString());
    }
  }, [results]);

  return (
    <div className="ai-box semantic-search">
      <h2>Semantic Search</h2>
      <input
        type="text"
        placeholder="Search workspace..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p>Status: {status}</p>
      {searchTime && <p>Last Search: {searchTime}</p>}
      {loading ? <p>Loading...</p> : (
        <ul>
          {results.length > 0 ? results.map(doc => (
            <li key={doc.id}>
              <strong>{doc.title}</strong><br />
              <small>{doc.content}</small>
            </li>
          )) : query.length > 3 && <li>No relevant documents found.</li>}
        </ul>
      )}
    </div>
  );
};

export default SemanticSearch;