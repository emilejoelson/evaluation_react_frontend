// AllUsers.tsx
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ListBookCell from '../Book/ListBookCell';
import UserModel from '../../models/entities/UserModel';
import CellBorrow from '../Borrow/CellBorrow';
import BookModel from '../../models/entities/BookModel';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BorrowModal from '../Borrow/BorrowModal';
import CellReview from '../Review/CellReview';
import ReviewModal from '../Review/ReviewModal';

type Props = {
    users: UserModel[];
};

const AllUsers = ({ users }: Props) => {
    const [selectedBook, setSelectedBook] = useState<BookModel | null>(null);
    const [borrowingUserId, setBorrowingUserId] = useState<number | null>(null);
    const [reviewUserId, setReviewUserId] = useState<number | null>(null);
    const [openModal, setOpenModal] = useState(false);
    const [openModalReview, setOpenModalReview] = useState(false);
    const navigate = useNavigate();

    const handleBookSelect = (book: BookModel, userId: number) => {
        console.log(`Book ${book.title} selected for user ${userId}`);
        setSelectedBook(book);
        setBorrowingUserId(userId);
    };

    const handleBorrowClick = (userId: number) => {
        setReviewUserId(userId); 
        setOpenModal(true);
    };

    const handleReviewClick = (userId: number) => {
        setReviewUserId(userId); 
        setOpenModalReview(true);
    };

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'username', headerName: 'Username', width: 250 },
        { field: 'email', headerName: 'Email', width: 250 },
        {
            field: 'books',
            headerName: 'Books',
            width: 300,
            renderCell: (params) => (
                <ListBookCell books={params.row.books} onBookSelect={(book: BookModel) => handleBookSelect(book, params.row.id)} />
            )
        },
        {
            field: 'borrow',
            headerName: 'Borrow',
            width: 80,
            renderCell: (params) => (
                <CellBorrow onBorrowClick={() => handleBorrowClick(params.row.id)} />
            )
        },
        {
            field: 'review',
            headerName: 'Review',
            width: 80,
            renderCell: (params) => (
                <CellReview onReviewClick={() => handleReviewClick(params.row.id)} />
            )
        },
    ];

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#283593',
                position: 'relative'
            }}
        >
            <Box
                sx={{
                    height: 400,
                    width: '100%',
                    backgroundColor: '#E3F2FD',
                    borderRadius: 5,
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    overflow: 'hidden',
                    margin: '0 5em 0 5em'
                }}
            >
                <DataGrid
                    rows={users}
                    columns={columns}
                    density="compact"
                    checkboxSelection
                    sx={{
                        '& .MuiDataGrid-cell': {
                            borderBottom: '1px solid #BBDEFB',
                        },
                        '& .MuiDataGrid-row': {
                            '&:nth-of-type(odd)': {
                                backgroundColor: '#E3F2FD',
                            },
                            '&.Mui-selected': {
                                backgroundColor: '#BBDEFB',
                            }
                        },
                    }}
                />
                <BorrowModal
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                    book={selectedBook}
                    userId={borrowingUserId}
                />
                <ReviewModal
                    open={openModalReview}
                    onClose={() => setOpenModalReview(false)}
                    book={selectedBook}
                    userId={reviewUserId}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        top: '22.2%',
                        left: '92%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1,
                        backgroundColor: 'gray',
                        borderRadius: '50%',
                        cursor: "pointer",
                        height: "40px"
                    }}
                    onClick={() => navigate('/add-user')}
                >
                    <AddIcon sx={{ color: 'white', fontSize: 40 }} />
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '77%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1,
                        backgroundColor: 'gray',
                        borderRadius: '50%',
                        cursor: "pointer",
                        height: "40px"
                    }}
                    onClick={() => navigate('/')}
                >
                    <ArrowBackIcon sx={{ color: 'white', fontSize: 40 }} />
                </Box>

            </Box>
        </Box>
    );
};

export default AllUsers;
