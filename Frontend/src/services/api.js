import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/faqs';

export const getFAQs = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    throw error;
  }
};

export const addFAQ = async (faq) => {
  try {
    const response = await axios.post(`${BASE_URL}/add`, faq);
    return response.data;
  } catch (error) {
    console.error('Error adding FAQ:', error);
    throw error;
  }
};

export const updateFAQ = async (id, updatedFAQ) => {
  try {
    const response = await axios.put(`${BASE_URL}/update/${id}`, updatedFAQ);
    return response.data;
  } catch (error) {
    console.error('Error updating FAQ:', error);
    throw error;
  }
};

export const deleteFAQ = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/delete/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting FAQ:', error);
    throw error;
  }
};
