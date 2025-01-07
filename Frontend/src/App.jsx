import React, { useState, useEffect } from 'react';
import { getFAQs, addFAQ, updateFAQ, deleteFAQ } from './services/api';
import FAQList from './components/FAQList';
import AddFAQ from './components/AddFAQ';

const App = () => {
  const [faqs, setFAQs] = useState([]);

  const fetchFAQs = async () => {
    try {
      const data = await getFAQs();
      setFAQs(data);
    } catch (error) {
      console.error('Error fetching FAQs:', error);
    }
  };

  const handleAddFAQ = async (newFAQ) => {
    try {
      await addFAQ(newFAQ);
      fetchFAQs();
    } catch (error) {
      console.error('Error adding FAQ:', error);
    }
  };

  const handleUpdateFAQ = async (id, updatedFAQ) => {
    try {
      await updateFAQ(id, updatedFAQ);
      fetchFAQs();
    } catch (error) {
      console.error('Error updating FAQ:', error);
    }
  };

  const handleDeleteFAQ = async (id) => {
    try {
      await deleteFAQ(id);
      fetchFAQs();
    } catch (error) {
      console.error('Error deleting FAQ:', error);
    }
  };

  useEffect(() => {
    fetchFAQs();
  }, []);

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <div style={{ marginTop: '200px', textAlign: 'center' }}>
        <h1 className="my-4 text-primary">FAQ Management</h1>
        <p className="text-muted">Manage your frequently asked questions with ease!</p>
      </div>
      <div className="card shadow-lg p-4 w-100" style={{ maxWidth: '800px' }}>
        <AddFAQ onAddFAQ={handleAddFAQ} />
        <hr />
        <FAQList faqs={faqs} onUpdateFAQ={handleUpdateFAQ} onDeleteFAQ={handleDeleteFAQ} />
      </div>
    </div>
  );
};

export default App;
