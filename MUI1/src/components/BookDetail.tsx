import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Book } from '../types/Book';
import booksData from '../data/books.json';
import { Container, Grid, Typography, Button } from '@mui/material';

const books: Book[] = booksData;

const BookDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Typography variant="h4" align="center">Invalid book ID</Typography>;
  }

  const bookId = parseInt(id, 10);
  
  if (isNaN(bookId)) {
    return <Typography variant="h4" align="center">Invalid book ID</Typography>;
  }

  const book = books.find(book => book.id === bookId);

  if (!book) {
    return <Typography variant="h4" align="center">Book not found</Typography>;
  }

  return (
    <Container>
      <Grid container spacing={4} justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
        <Grid item xs={12} sm={6} md={4}>
          <img src={book.imageUrl} alt={book.title} style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <Typography variant="h3" component="h1" gutterBottom>
            {book.title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Author:</strong> {book.author}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Genre:</strong> {book.genre}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Rating:</strong> {book.rating}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Description:</strong> {book.description}
          </Typography>
          <Button component={Link} to="/books" variant="contained" color="primary" style={{ marginTop: '16px' }}>
            Back to Book List
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BookDetail;
