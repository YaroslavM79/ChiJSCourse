import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../types/store';
import { addBook, removeBook } from '../types/booksSlice';
import { generateRandomBook } from '../types/bookUtils';
import '../styles/Navigation.css';

const Navigation: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { books } = useSelector((state: RootState) => state.books);
  const bookCount = useSelector((state: RootState) => state.books.books.length);


  const handleAddBook = () => {
    const newBook = generateRandomBook();
    dispatch(addBook(newBook));
  };

  const handleRemoveBook = () => {
    if (books.length > 0) {
      const lastBookId = books[books.length - 1].id;
      dispatch(removeBook(lastBookId));
    }
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/books">Books ({bookCount})</Link>
      <button onClick={handleAddBook}>Add Random Book</button>
      <button onClick={handleRemoveBook} disabled={books.length === 0}>
        Remove Last Book
      </button>
    </nav>
  );
}

export default Navigation;
