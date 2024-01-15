import React from 'react';

const BookDetails = ({ book }) => {
  return (
    <div>
      <h2>Book Details</h2>
      <p>Title: {book.title}</p>
      <p>Author: {book.author}</p>
      <p>Year: {book.year}</p>
      <p>Category: {book.category}</p>
      <p>Description: {book.description}</p>
      <p>Summary: {book.summary}</p>
      <p>Status: {book.status}</p>
      <p>Rating: {book.rating}</p>

    </div>
  );
};

export default BookDetails;
