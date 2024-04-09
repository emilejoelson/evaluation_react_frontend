import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { AddBook as AddBookService } from "../../config/BookApi";
import { useNavigate } from 'react-router-dom';
import BookModel from '../../models/entities/BookModel';
import { validateBookForm } from '../../utils/helpers';

const AddBook = () => {
    const [formData, setFormData] = useState<BookModel>({
        title: '',
        author: '',
        summary: '',
        genre: '',
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddBook = async () => {
        try {
            await AddBookService(formData);
            navigate("/books");
        } catch (error) {
            alert(error.message); 
        }
    };
    

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px',
                backgroundColor: '#fff',
                borderRadius: '5px',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                width: '400px',
                margin: 'auto',
                marginTop: '50px',
            }}
        >
            <h2>Add Book</h2>
            <TextField
                label="Title"
                variant="outlined"
                margin="normal"
                fullWidth
                name="title"
                value={formData.title}
                onChange={handleChange}
            />
            <TextField
                label="Author"
                variant="outlined"
                margin="normal"
                fullWidth
                name="author"
                value={formData.author}
                onChange={handleChange}
            />
            <TextField
                label="Summary"
                variant="outlined"
                margin="normal"
                fullWidth
                name="summary"
                value={formData.summary}
                onChange={handleChange}
            />
            <TextField
                label="Genre"
                variant="outlined"
                margin="normal"
                fullWidth
                name="genre"
                value={formData.genre}
                onChange={handleChange}
            />
            <Button variant="contained" color="primary" fullWidth onClick={handleAddBook}>
                Add Book
            </Button>
        </Box>
    );
}

export default AddBook;
