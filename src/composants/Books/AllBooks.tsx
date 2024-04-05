// AllBooks.tsx
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import BookModel from '../../models/entities/BookModel';
import { useNavigate } from 'react-router-dom';

type Props = {
    books: BookModel[];
};

const AllBooks = ({ books }: Props) => {
    const navigate = useNavigate();
    



    const AddUser = () => {
        navigate('/add-book');
    };

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'title', headerName: 'Title', width: 250 },
        { field: 'author', headerName: 'Author', width: 250 },
        { field: 'summary', headerName: 'Summary', width: 250 },
        { field: 'genre', headerName: 'Genre', width: 250 },
        { field: 'borrowingDate', headerName: 'Borrowing Date', width: 250 },
        { 
            field: 'user', 
            headerName: 'User ID', 
            width: 250

        }
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
                    rows={books}
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
                    onClick={AddUser}
                >
                    <AddIcon sx={{ color: 'white', fontSize: 40 }} />
                </Box>
            </Box>
        </Box>
    );
};

export default AllBooks;
