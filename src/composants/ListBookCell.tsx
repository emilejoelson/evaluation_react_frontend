// ListBookCell.tsx
import { Button, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import BookModel from '../models/entities/BookModel';
import { getAllBooks } from "../config/BookApi";

type Props = {
    onBookSelect: (book: BookModel) => void;
};

const ListBookCell = ({ onBookSelect }: Props) => {
    const [books, setBooks] = useState<BookModel[]>([]);
    const [selectedBook, setSelectedBook] = useState<BookModel | null>(null);
    const [open, setOpen] = useState(false);

    const handleButtonClick = async () => {
        try {
            const allBooks = await getAllBooks();
            setBooks(allBooks);
            setOpen(true);
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };

    const handleBookSelect = (book: BookModel) => {
        setSelectedBook(book);
        onBookSelect(book);
        setOpen(false);
    };

    return (
        <Select
            open={open}
            onClose={() => setOpen(false)}
            onOpen={handleButtonClick}
            value={selectedBook ? selectedBook.id : ""}
            style={{ marginTop: "-10px" }}
            displayEmpty
            renderValue={() => (
                selectedBook ? selectedBook.title : (
                    <Button style={{ marginTop: "-10px" }} onClick={handleButtonClick}>
                    </Button>
                )
            )}
        >
            {books.map((book) => (
                <MenuItem key={book.id} value={book.id} onClick={() => handleBookSelect(book)}>
                    {book.title}
                </MenuItem>
            ))}
        </Select>
    );
};

export default ListBookCell;
