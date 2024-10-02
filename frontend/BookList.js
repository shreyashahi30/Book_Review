// src/components/BookList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../features/booksSlice';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './BookList.css';

const BookList = () => {
  const dispatch = useDispatch();
  const { books, loading, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks(1)); // Fetch the first page of books
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="book-list">
      <h2>Book List</h2>
      <div className="book-list-container">
        {books.map((book) => (
          <motion.div 
            key={book._id} 
            className="book-card" 
            whileHover={{ scale: 1.05 }} 
            transition={{ duration: 0.2 }}
          >
            <img src={book.coverImage} alt={book.title} className="book-cover" />
            <h3 className="book-title">{book.title}</h3>
            <p className="book-author">{book.author}</p>
            <Link to={`/book/${book._id}`} className="book-details-button">View Details</Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
