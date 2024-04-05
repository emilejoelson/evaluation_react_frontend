// CellBorrow.tsx
import { Button } from "@mui/material";
import TouchAppIcon from '@mui/icons-material/TouchApp';
import { borrowBook } from "../config/BookApi"; 
import BookModel from '../models/entities/BookModel';
import toast from "react-hot-toast";

type Props = {
    book: BookModel | null;
    userId: number;
};

const CellBorrow = ({ book, userId }: Props) => {
    const handleBorrow = async () => {
        if (!book) {
            console.error("No book selected.");
            return;
        }

        try {
            await borrowBook(userId, book.id); 
            console.log("Book borrowed successfully!");
            toast.success("Book borrowed successfully!")
        } catch (error) {
            console.error("Error borrowing book:", error);
            toast.error("Error borrowing book",error)
        }
    };

    return (
        <Button onClick={handleBorrow} disabled={!book}>
            <TouchAppIcon size={20} style={{ color: "blue" }} />
        </Button>
    );
};

export default CellBorrow;
