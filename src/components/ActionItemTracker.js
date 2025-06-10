import React, { useState, useEffect } from 'react';

const initialItems = [
  { task: "Finalize UI", assignedTo: "Sarah", done: false },
  { task: "Deploy staging", assignedTo: "Ravi", done: false },
  { task: "Write test cases", assignedTo: "Priya", done: false }
];

const ActionItemTracker = () => {
  const [items, setItems] = useState(initialItems);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Loading...");
  const [lastUpdate, setLastUpdate] = useState("");
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setStatus("Tracking tasks");
    }, 500);
  }, []);

  useEffect(() => {
    const completed = items.filter(item => item.done);
    const percentage = Math.round((completed.length / items.length) * 100);
    setProgress(percentage);
    setLastUpdate(new Date().toLocaleTimeString());
    setCompletedTasks(completed.map(i => i.task));
  }, [items]);

  const toggleStatus = (index) => {
    const updated = [...items];
    updated[index].done = !updated[index].done;
    setItems(updated);
  };

  return (
    <div className="ai-box action-tracker">
      <h2>Action Item Tracker</h2>
      <p>Status: {status}</p>
      <p>Progress: {progress}% ✅</p>
      <p>Last Updated: {lastUpdate}</p>
      <ul>
        {items.map((item, i) => (
          <li key={i} className={item.done ? "done" : ""}>
            <label>
              <input type="checkbox" checked={item.done} onChange={() => toggleStatus(i)} />
              {item.task} – <em>{item.assignedTo}</em>
            </label>
          </li>
        ))}
      </ul>
      <p>Completed: {completedTasks.join(", ") || "None"}</p>
    </div>
  );
};

export default ActionItemTracker;