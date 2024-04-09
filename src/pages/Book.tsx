import React, { useEffect, useState } from 'react';
import BookModel from '../models/entities/BookModel';
import { getAllBooks } from '../config/BookApi';
import AllBooks from '../composants/Book/AllBooks';

const Book = () => {
    const [books, setBooks] = useState<Array<BookModel>>([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const booksData = await getAllBooks();
                setBooks(booksData);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, []);

    return (
        <div>
            <AllBooks books={books} />
        </div>
    );
}

export default Book;
