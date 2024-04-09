import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { getReviewsByBookId } from '../../config/ReviewApi';
import { getBorrowsByBookId } from '../../config/BorrowApi';
import ReviewModel from '../../models/entities/ReviewModel';
import BorrowModel from '../../models/entities/BorrowModel';
import ReplyIcon from '@mui/icons-material/Reply';

const BookDetails = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const [reviews, setReviews] = useState<ReviewModel[]>([]);
  const [borrows, setBorrows] = useState<BorrowModel[]>([]);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getReviewsByBookId(parseInt(bookId, 10));
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    const fetchBorrows = async () => {
      try {
        const data = await getBorrowsByBookId(parseInt(bookId, 10));
        setBorrows(data);
      } catch (error) {
        console.error('Error fetching borrows:', error);
      }
    };

    fetchReviews();
    fetchBorrows();
  }, [bookId]);

  return (
    <Box sx={{ maxWidth: 600, margin: '0 auto', padding: '20px' }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#283593' }}>Borrows for Book ID: {bookId}</Typography>
      {borrows.map((borrow) => (
        <Box key={borrow.id} sx={{ marginBottom: '20px', border: '1px solid #BBDEFB', padding: '10px' }}>
          <Typography variant="h6">Borrow ID: {borrow.id}</Typography>
          <Typography>User: {borrow.user?.username}</Typography>
          <Typography>Borrowing Date: {borrow.borrowingDate}</Typography>
          <Typography>Return Date: {borrow.returnDate}</Typography>
        </Box>
      ))}

      <Typography variant="h4" gutterBottom sx={{ color: '#283593', marginTop: '20px' }}>Reviews for Book ID: {bookId}</Typography>
      {reviews.map((review) => (
        <Box key={review.id} sx={{ marginBottom: '20px', border: '1px solid #BBDEFB', padding: '10px' }}>
          <Typography variant="h6">Review ID: {review.id}</Typography>
          <Typography>User: {review.user?.username}</Typography>
          <Typography>Review Text: {review.reviewText}</Typography>
          <Typography>Rating: {review.rating}</Typography>
        </Box>
      ))}

        <Box
                sx={{
                        position: 'absolute',
                        top: '25%',
                        left: '80%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1,
                        backgroundColor: 'gray',
                        borderRadius: '50%',
                        cursor: "pointer",
                        height: "40px"
                    }}
                    onClick={() => navigate('/')}
                >
                    <ReplyIcon sx={{ color: 'white', fontSize: 40 }} />
                </Box>
    </Box>
  );
};

export default BookDetails;
