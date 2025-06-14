import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebaseConfig';

// Already added before:
export const saveChatData = async (prompt, response) => {
  try {
    await addDoc(collection(db, 'chatData'), {
      prompt,
      response,
      createdAt: Timestamp.now(),
    });
  } catch (err) {
    console.error("❌ Firestore error (chat):", err);
  }
};

// ✅ NEW: Save summarize input/output
export const saveSummarizeData = async (input, output) => {
  try {
    await addDoc(collection(db, 'summarizeData'), {
      input,
      output,
      createdAt: Timestamp.now(),
    });
  } catch (err) {
    console.error("❌ Firestore error (summary):", err);
  }
};

