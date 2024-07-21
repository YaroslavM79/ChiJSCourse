import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from '../types/Book';
import { Button, Container, Grid, Typography, TextField } from '@mui/material';
import booksData from '../data/books.json';
import '../styles/BookList.css';

const books: Book[] = booksData;

const BookList: React.FC = () => {
  return (
    <Container>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Book List
      </Typography>
      <Grid container spacing={4}>
        {books.map((book) => (
          <Grid container item xs={12} key={book.id} spacing={2} alignItems="center">
            <Grid item xs={12} sm={4} md={3}>
              <Link to={`/books/${book.id}`}>
                <img src={book.imageUrl} alt={book.title} className="book-image" style={{ width: '100%' }} />
              </Link>
            </Grid>
            <Grid item xs={12} sm={8} md={9}>
              <Link to={`/books/${book.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant="h5" component="h2">
                  {book.title}
                </Typography>
                <Typography variant="body1">
                  Author: {book.author}
                </Typography>
                <Typography variant="body2">
                  Rating: {book.rating}
                </Typography>
              </Link>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BookList;
