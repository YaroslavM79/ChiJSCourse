// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/:id" element={<BookDetail />} />
          <Route path="/books" element={<BookList />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
