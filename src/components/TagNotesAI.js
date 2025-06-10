import React, { useState, useEffect } from 'react';

const TagNotesAI = () => {
  const [note, setNote] = useState("");
  const [tags, setTags] = useState([]);
  const [tagTime, setTagTime] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (note.toLowerCase().includes("deadline")) {
        setTags(["Urgent", "Deadline"]);
      } else if (note.length > 20) {
        setTags(["General", "AI-generated"]);
      } else {
        setTags([]);
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [note]);

  useEffect(() => {
    if (tags.length > 0) {
      setTagTime(new Date().toLocaleTimeString());
    }
  }, [tags]);

  return (
    <div className="ai-box">
      <h2>AI Note Tagger</h2>
      <textarea
        rows="4"
        placeholder="Write your note..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      {tags.length > 0 && (
        <div>
          <strong>Tags:</strong>
          <div>{tags.map((tag, index) => <span key={index} className="tag">{tag}</span>)}</div>
          <p><em>Last tagged at: {tagTime}</em></p>
        </div>
      )}
    </div>
  );
};

export default TagNotesAI;
