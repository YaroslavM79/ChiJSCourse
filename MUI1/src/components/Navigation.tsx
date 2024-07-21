import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation: React.FC = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/books">Books</Link>
    </nav>
  );
}

export default Navigation;
