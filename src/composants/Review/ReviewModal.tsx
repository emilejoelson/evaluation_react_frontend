// ReviewModal.tsx
import React, { useState } from 'react';
import { Button, TextField, MenuItem, Modal, Box } from '@mui/material';
import ReviewModel from '../../models/entities/ReviewModel';
import toast from 'react-hot-toast';
import { reviewBook } from '../../config/ReviewApi';
import { validateReviewText } from '../../utils/helpers';

type Props = {
    open: boolean;
    onClose: () => void;
    book: BookModel | null; 
    userId: number | null; 
};

const ReviewModal = ({ open, onClose, book, userId }: Props) => {
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState<number>(0); 

    const handleSubmit = () => {
        if (!book) {
            toast.error("Cannot add review without selecting a book");
            return;
        }

        const reviewData: ReviewModel = {
            user: { id: userId }, 
            book, 
            reviewText,
            rating
        };
        validateReviewText(reviewData);
        reviewBook(reviewData);
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="review-modal-title"
            aria-describedby="review-modal-description"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '10px',
                    backgroundColor: 'white',
                    padding: '20px',
                    minWidth: '300px',
                    maxWidth: '500px'
                }}
            >
                <h2 id="review-modal-title">Add Review</h2>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Review Text"
                    fullWidth
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                />
                <TextField
                    select
                    margin="dense"
                    label="Rating"
                    fullWidth
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                >
                    {[1, 2, 3, 4, 5].map((value) => (
                        <MenuItem key={value} value={value}>
                            {value}
                        </MenuItem>
                    ))}
                </TextField>
                <Button onClick={handleSubmit}>OK</Button>
                <Button sx={{ color: "red" }} onClick={onClose}>Close</Button>
            </Box>
        </Modal>
    );
};

export default ReviewModal;
