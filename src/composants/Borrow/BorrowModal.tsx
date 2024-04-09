import { Modal, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { borrowBook } from '../../config/BorrowApi';
import BookModel from '../../models/entities/BookModel';
import toast from "react-hot-toast";
import { validateBorrowForm } from "../../utils/helpers";

type Props = {
    open: boolean;
    onClose: () => void;
    book: BookModel | null;
    userId: number | null;
};

const BorrowModal = ({ open, onClose, book, userId }: Props) => {
    const [returnDate, setReturnDate] = useState("");

    const handleBorrowSubmit = () => {
        if (returnDate.trim() === "") {
            toast.error("Please select a return date");
            return;
        }

        const borrowData = {
            user: { id: userId },
            book: { id: book?.id },
            returnDate: new Date(returnDate).toISOString()
        };
        validateBorrowForm(borrowData);
        borrowBook(borrowData); 
        onClose(); 
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div style={{ position: "absolute", top: "50%", left: "50%",borderRadius:"10px", transform: "translate(-50%, -50%)", backgroundColor: "white", padding: "20px" }}>
                <h2 id="modal-modal-title">Enter Return Date</h2>
                <TextField
                    id="return-date"
                    label="Return Date"
                    type="datetime-local"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button sx = {{fontSize:20}} onClick={handleBorrowSubmit}>OK</Button>
                <Button sx = {{color : "red"}} onClick={onClose}>Close</Button>
            </div>
        </Modal>
    );
};

export default BorrowModal;
