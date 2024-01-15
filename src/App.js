import React, { useState, useEffect } from 'react';
import BookkeepingForm from './BookkeepingForm';
import BookkeepingList from './BookkeepingList';

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    // Fetch entries from the backend when the component mounts
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    const response = await fetch('http://localhost:3001/api/bookkeeping/entries');
    const data = await response.json();
    setEntries(data);
  };

  const addEntry = async (entry) => {
    const response = await fetch('http://localhost:3001/api/bookkeeping/entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entry),
    });

    const newEntry = await response.json();
    setEntries([...entries, newEntry]);
  };

  return (
    <div>
      <h1>Bookkeeping System</h1>
      <BookkeepingForm addEntry={addEntry} />
      <BookkeepingList entries={entries} />
    </div>
  );
}

export default App;


// // src/components/App.js
// import React, { useState } from 'react';
// import BookList from './components/BookList';
// import BookDetails from './components/BookDetails';
// import BookForm from './components/BookForm';
// import './BookDetail.css';
// import './App.css';
// import './BookForm.css';

// const App = () => {
//   const [books, setBooks] = useState([
//     { id: 1, title: 'Book 1', status: 'Not Read' },
//     { id: 2, title: 'Book 2', status: 'In Progress' },
//     // Add more books as needed
//   ]);
//   const [selectedBook, setSelectedBook] = useState(null);

//   const handleBookClick = (book) => {
//     setSelectedBook(book);
//   };

//   const handleAddBook = (newBook) => {
//     // Add the new book to the existing book list
//     setBooks((prevBooks) => [
//       ...prevBooks,
//       { id: prevBooks.length + 1, ...newBook },
//     ]);
//   };

//   return (
//     <div>
//       <BookList books={books} onBookClick={handleBookClick} />
//       {selectedBook && <BookDetails book={selectedBook} />}
//       <BookForm onAddBook={handleAddBook} />
//     </div>
//   );
// };

// export default App;
