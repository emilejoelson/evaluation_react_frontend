import toast from "react-hot-toast";
import ResponseData from "../models/dataTypes/ResponseData";
import BorrowModel from "../models/entities/BorrowModel";
import { APIProvider } from "./APIProvider";
import ErrorResponseData from "../models/dataTypes/ErrorResponseData";


const borrowBook = async (borrow: BorrowModel): Promise<any> => {
    try {
        const response: ResponseData = await APIProvider.post('/borrows', borrow);
        toast.success("Borrow Successfully ")
        return response.data;
        
    } catch (error: any) {
        throw error.response.data as ErrorResponseData;
    }
};

const getBorrowsByBookId = async (bookId: number): Promise<any> => {
    try {
        const response: ResponseData = await APIProvider.get(`/borrows/byBookId/${bookId}`);
        return response.data;
    } catch (error: any) {
        throw error.response.data as ErrorResponseData;
    }
};
export {borrowBook,getBorrowsByBookId}
