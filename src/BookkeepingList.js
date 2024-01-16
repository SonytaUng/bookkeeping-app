import React from 'react';
import { Link } from 'react-router-dom';

// const BookkeepingList = ({ entries }) => {
  const BookkeepingList = ({ entries, setEntryToEdit }) => {

    const handleEditClick = (entry) => {
      setEntryToEdit(entry);
    };
    
  return (
    <div>
      <h2>My Book List:</h2>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            Title: {entry.title},
            Author:  {entry.author}, 
            Year:  {entry.year}, 
            Description:  {entry.description}, 
            Status: {entry.status}, 
            Rate:  {entry.rate}
            {/* {' '}
            <button onClick={() => handleEditClick(entry)}>Edit</button>
            {' '}
            <Link to={`/edit/${entry.id}`} onClick={() => setEntryToEdit(entry)}>Edit Link</Link> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookkeepingList;
