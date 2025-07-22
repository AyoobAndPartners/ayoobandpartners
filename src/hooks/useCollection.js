import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

export const useCollection = (collectionName) => {
  const [documents, setDocuments] = useState([]);

useEffect(() => {
  const fetchDocs = async () => {
    try {
      const snapshot = await getDocs(collection(db, collectionName));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDocuments(data);
    } catch (error) {
      console.error("Error fetching documents: ", error);
    }
  };
  fetchDocs();
}, [collectionName]);


  return documents;
};
