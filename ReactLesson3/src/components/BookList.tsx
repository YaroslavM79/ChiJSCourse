import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from '../types/Book';
import booksData from '../data/books.json'; // Импорт JSON файла
import '../styles/BookList.css'; // Импорт CSS файла

const books: Book[] = booksData;

const BookList: React.FC = () => {
  return (
    <div className="book-list">
      <h1>Book List</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>
              <img src={book.imageUrl} alt={book.title} className="book-image" />
              <div>
                <h2>{book.title}</h2>
                <p>Author: {book.author}</p>
                <p>Rating: {book.rating}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
