import React, { useState } from 'react';

const FAQList = ({ faqs, onUpdateFAQ, onDeleteFAQ }) => {
  const [editMode, setEditMode] = useState(null);
  const [updatedFAQ, setUpdatedFAQ] = useState({});

  const handleEditClick = (faq) => {
    setEditMode(faq._id);
    setUpdatedFAQ({ question: faq.question, answer: faq.answer });
  };

  const handleSaveClick = (id) => {
    onUpdateFAQ(id, updatedFAQ);
    setEditMode(null);
  };

  const handleCancelClick = () => {
    setEditMode(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedFAQ((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <table className="table table-hover table-bordered text-center">
        <thead className="table-light">
          <tr>
            <th>#</th>
            <th>Question</th>
            <th>Answer</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {faqs.length > 0 ? (
            faqs.map((faq, index) => (
              <tr key={faq._id}>
                <td>{index + 1}</td>
                <td>
                  {editMode === faq._id ? (
                    <input
                      type="text"
                      name="question"
                      value={updatedFAQ.question}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  ) : (
                    faq.question
                  )}
                </td>
                <td>
                  {editMode === faq._id ? (
                    <textarea
                      name="answer"
                      value={updatedFAQ.answer}
                      onChange={handleInputChange}
                      className="form-control"
                      rows="2"
                    ></textarea>
                  ) : (
                    faq.answer
                  )}
                </td>
                <td>
                  <div className="d-flex justify-content-center gap-2">
                    {editMode === faq._id ? (
                      <>
                        <button
                          className="btn btn-success btn-sm"
                          onClick={() => handleSaveClick(faq._id)}
                        >
                          Save
                        </button>
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={handleCancelClick}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => handleEditClick(faq)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => onDeleteFAQ(faq._id)}
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-muted">
                No FAQs available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FAQList;
