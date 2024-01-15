import React from 'react';

const BookkeepingList = ({ entries }) => {
  return (
    <div>
      <h2>Book Information List:</h2>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            'Title: ' {entry.title} ' , '
            'Author: ' {entry.author} ' , '
            'Year: ' {entry.year} ' , '
            'Description: ' {entry.description} ' , '
            'Status: ' {entry.status} ' , '
            'Rate: ' {entry.rate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookkeepingList;
