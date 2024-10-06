import booksData from '../data/books.json';
import { Book } from '../types/Book';

export interface BooksState {
    books: Book[];
    loading: boolean;
    error: string | null;
  }
  
  const initialState: BooksState = {
    books: booksData,
    loading: false,
    error: null,
  };

export default initialState;
