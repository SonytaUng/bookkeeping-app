import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react';
import BookkeepingForm from './BookkeepingForm';
import BookkeepingList from './BookkeepingList';
import './BookDetail.css';
import './App.css';
import './BookForm.css';

function App() {
  const [entries, setEntries] = useState([]);
  const [entryToEdit, setEntryToEdit] = useState(null);
  const [entryToDelete, setEntryToDelete] = useState(null);

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

    const updateEntry = async (id, updatedEntry) => {
    const response = await fetch(`http://localhost:3001/api/bookkeeping/entries/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedEntry),
    });

    const updatedData = await response.json();
    const updatedEntries = entries.map(entry => (entry.id === id ? updatedData : entry));
    setEntries(updatedEntries);
    setEntryToEdit(null);
  };

  const deleteEntry = async (id, deleteEntry) => {
    const response = await fetch(`http://localhost:3001/api/bookkeeping/entries/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(deleteEntry),
    });

    const deleteData = await response.json();
    const deleteEntries = entries.map(entry => (entry.id === id ? deleteData : entry));
    setEntries(deleteEntries);
    setEntryToEdit(null);
  };

  

  return (
    <div>
      <h1>Bookkeeping System</h1>
      <BookkeepingForm addEntry={addEntry} />
      <BookkeepingList entries={entries} />
    </div>
    // <Router>
    //   <div>
    //     <h1>Bookkeeping System</h1>
    //     <Switch>
    //       <Route exact path="/">
    //         <BookkeepingList entries={entries} setEntryToEdit={setEntryToEdit} />
    //       </Route>
    //       <Route path="/add">
    //         <BookkeepingForm addEntry={addEntry} />
    //       </Route>
    //       <Route path="/edit/:id">
    //         <BookkeepingForm updateEntry={updateEntry} entryToEdit={entryToEdit} />
    //       </Route>
    //     </Switch> 
    //   </div>
    // </Router>
  );
}

export default App;