// src/components/BookForm.js
import React, { useState } from 'react';

const BookForm = ({ onAddBook }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    author: '',
    yearPublished: '',
    status: 'Not Read',
    rating: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation if needed
    onAddBook(formData);
    setFormData({
      title: '',
      description: '',
      author: '',
      yearPublished: '',
      status: 'Not Read',
      rating: '',
    });
  };

  return (
    <div>
      <h2>Add a Book</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />

        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} required />

        <label>Author:</label>
        <input type="text" name="author" value={formData.author} onChange={handleChange} required />

        <label>Year Published:</label>
        <input
          type="text"
          name="yearPublished"
          value={formData.yearPublished}
          onChange={handleChange}
          required
        />

        <label>Status:</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Not Read">Not Read</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>

        <label>Rating:</label>
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          min="1"
          max="5"
          required
        />

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;
