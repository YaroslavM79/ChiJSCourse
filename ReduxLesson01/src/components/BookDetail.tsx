// src/components/BookDetail.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Book } from '../types/Book';
import booksData from '../data/books.json';
import '../styles/BookDetail.css';

const books: Book[] = booksData;

const BookDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <h2>Invalid book ID</h2>;
  }

  const bookId = parseInt(id, 10);
  
  if (isNaN(bookId)) {
    return <h2>Invalid book ID</h2>;
  }

  const book = books.find(book => book.id === bookId);

  if (!book) {
    return <h2>Book not found</h2>;
  }

  return (
    <div className="book-detail">
      <img src={book.imageUrl} alt={book.title} />
      <div>
        <h1>{book.title}</h1>
        <p>Author: {book.author}</p>
        <p>Genre: {book.genre}</p>
        <p>Rating: {book.rating}</p>
        <p>Description: {book.description}</p>
        <Link to="/books">Back to Book List</Link>
      </div>
    </div>
  );
};

export default BookDetail;
