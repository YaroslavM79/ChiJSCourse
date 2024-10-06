import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../types/store';
import { fetchBooks } from '../types/booksSlice'; 
import { Link } from 'react-router-dom';
import '../styles/BookList.css'; // Импорт CSS файла



const BookList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { books, loading, error } = useSelector((state: RootState) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

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

}
export default BookList;
