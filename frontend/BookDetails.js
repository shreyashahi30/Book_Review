// src/components/BookDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import './BookDetails.css';

const BookDetails = () => {
    const { id } = useParams();
    
    // Example book data
    const books = [
        {
            id: '1',
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            coverImage: 'https://irs.www.warnerbros.com/keyart-jpeg/movies/media/browser/the_great_gatsby_key_art.jpg',
            description: 'A story about the mysterious Jay Gatsby and his obsession with Daisy Buchanan.'
        },
        {
            id: '2',
            title: '1984',
            author: 'George Orwell',
            coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV4yWihrnwBCaQNXCMF_zSIAPDMidcLtnR3g&s',
            description: 'A dystopian novel set in a totalitarian society under constant surveillance.'
        },
        {
            id: '3',
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            coverImage: 'https://m.media-amazon.com/images/I/817SDvX90JL._AC_UF1000,1000_QL80_.jpg',
            description: 'A novel about the serious issues of race and rape, viewed through the eyes of a young girl.'
        },
        {
            id: '4',
            title: 'Pride and Prejudice',
            author: 'Jane Austen',
            coverImage: 'https://cdn.kobo.com/book-images/1a735d96-6075-4bca-87b7-15fb97ee50c7/1200/1200/False/pride-and-prejudice-216.jpg',
            description: 'A romantic novel that critiques the British landed gentry at the end of the 18th century.'
        },
        {
            id: '5',
            title: 'The Catcher in the Rye',
            author: 'J.D. Salinger',
            coverImage: 'https://cdn.britannica.com/94/181394-050-2F76F7EE/Reproduction-cover-edition-The-Catcher-in-the.jpg?w=400&h=300&c=crop',
            description: 'A story about teenage rebellion and the loss of innocence in a post-war society.'
        },
        {
            id: '6',
            title: 'Brave New World',
            author: 'Aldous Huxley',
            coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD2tl_v6-TVepJgFrB_tj0iAHU4V1hTaMJAQ&s',
            description: 'A dystopian novel that explores the consequences of a technologically advanced society.'
        },
        {
            id: '7',
            title: 'The Hobbit',
            author: 'J.R.R. Tolkien',
            coverImage: 'https://media.wired.com/photos/59327286aef9a462de982d45/master/pass/hobbit_group.jpg',
            description: 'A fantasy novel that follows the adventure of Bilbo Baggins as he encounters various creatures and challenges.'
        },
        {
            id: '8',
            title: 'Fahrenheit 451',
            author: 'Ray Bradbury',
            coverImage: 'https://blacknerdproblems.com/wp-content/uploads/2018/05/Fahrenheit-451-HBO-movie.jpg',
            description: 'A novel about a future where books are banned and "firemen" burn any that are found.'
        },
        {
            id: '9',
            title: 'The Alchemist',
            author: 'Paulo Coelho',
            coverImage: 'https://cdn.kobo.com/book-images/32ad8373-9cc5-4c4f-aa82-8155edbc7029/1200/1200/False/the-alchemist-a-graphic-novel.jpg',
            description: 'A philosophical novel about a shepherd named Santiago who dreams of finding a treasure in Egypt.'
        },
        {
            id: '10',
            title: 'The Picture of Dorian Gray',
            author: 'Oscar Wilde',
            coverImage: 'https://cdn.kobo.com/book-images/5524880b-d8a4-4785-a328-42ddadfa6394/1200/1200/False/the-picture-of-dorian-gray-a-to-z-classics.jpg',
            description: 'A novel that tells the story of a young man whose portrait ages while he remains young and beautiful.'
        }
    ];

    // Retrieve the book details based on the ID
    const book = books.find(book => book.id === id);

    return (
        <motion.div 
            className="book-detail" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.5 }}
        >
            {book ? (
                <>
                    <img src={book.coverImage} alt={book.title} className="book-cover" />
                    <h2 className="book-title">{book.title}</h2>
                    <p className="book-author">by {book.author}</p>
                    <p className="book-description">{book.description}</p>
                    <button className="review-button">Add a Review</button>
                </>
            ) : (
                <p>Book not found.</p>
            )}
        </motion.div>
    );
};

export default BookDetails;
