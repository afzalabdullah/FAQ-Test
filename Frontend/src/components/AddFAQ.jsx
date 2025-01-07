import React, { useState } from 'react';

const AddFAQ = ({ onAddFAQ }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddFAQ({ question, answer });
    setQuestion('');
    setAnswer('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="question" className="form-label">
          Question
        </label>
        <input
          type="text"
          className="form-control"
          id="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="answer" className="form-label">
          Answer
        </label>
        <textarea
          className="form-control"
          id="answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          rows="3"
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-success w-100">
        Add FAQ
      </button>
    </form>
  );
};

export default AddFAQ;
