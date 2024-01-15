import React, { useState } from 'react';

const BookkeepingForm = ({ addEntry }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [year, setYear] = useState('');
  const [status, setStatus] = useState('');
  const [category, setCategory] = useState('');
  const [rate, setRate] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author || !description || !year || !status || !category) {
      alert('Please enter all book inforamtion!');
      return;
    }

    const entry = {
      title,
      author,
      description,
      year, 
      status,
      category,
      rate: parseFloat(rate),
    };

    addEntry(entry);
    setTitle('');
    setAuthor('');
    setDescription('');
    setYear('');
    setCategory('');
    setRate('');
  };

  return (
    <div>
      <h2>Add Book Information:</h2>
      <form onSubmit={handleSubmit}>
      <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Author:
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </label>
        <label>
          Year:
          <input type="number" value={year} onChange={(e) => setYear(e.target.value)} />
        </label>
        <label>
          Description:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Category:
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </label>
        <label>
          Status:
          <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
        </label>
        <label>
          Rate:
          <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default BookkeepingForm;
