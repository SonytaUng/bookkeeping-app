import React, { useState, useEffect } from 'react';

const BookkeepingForm = ({ addEntry,  updateEntry, entryToEdit }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [year, setYear] = useState('');
  const [status, setStatus] = useState('');
  const [category, setCategory] = useState('');
  const [rate, setRate] = useState('');

  useEffect(() => {
    if (entryToEdit) {
      setTitle(entryToEdit.title);
      setAuthor(entryToEdit.author);
      setDescription(entryToEdit.description);
      setYear(entryToEdit.year.toString());
      setStatus(entryToEdit.status);
      setCategory(entryToEdit.category);
      setRate(entryToEdit.rate.toString());
    }
  }, [entryToEdit]);


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

    if (entryToEdit) {
      // If entryToEdit exists, update the entry
      updateEntry(entryToEdit.id, entry);
    } else {
      // If entryToEdit doesn't exist, add a new entry
      addEntry(entry);
    }


    // clear the form
    addEntry(entry);
    setTitle('');
    setAuthor('');
    setDescription('');
    setYear('');
    setCategory('');
    setStatus('');
    setRate('');
  };

  return (
    <div>
      {/* <h2>Add Book Information:</h2> */}
      <h2>{entryToEdit ? 'Edit Entry' : 'Add Entry'}</h2>
      <form onSubmit={handleSubmit}>
        <label> Title: </label>
        <input type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required
        />
        
        <label> Author: </label>
        <input type="text" 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)}
          required 
        />
        
        <label> Year: </label>
        <input type="number" 
          value={year} 
          onChange={(e) => setYear(e.target.value)} 
          required
        />
        
        <label> Description: </label>
        <input type="text" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required
        />
        
        <label> Category: </label>
        <input type="text" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          required
        />
        
        <label> Status:  </label>
        <input type="text" 
          value={status} 
          onChange={(e) => setStatus(e.target.value)} 
          required
        />
       
        <label>Status:</label>
        <select name="status" 
          value={status} 
          onChange={e => setStatus(e.target.value)}
          required
        >
          <option value="Not Read">Not Read Yet</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        
        <label>Rate:</label>
        <input
          type="number"
          name="rate"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          min="1"
          max="5"
        />
      
        {/* <button type="submit">Add</button> */}
        <button type="submit">{entryToEdit ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

export default BookkeepingForm;