import toast from "react-hot-toast";
import ErrorResponseData from "../models/dataTypes/ErrorResponseData";
import ResponseData from "../models/dataTypes/ResponseData";
import BookModel from "../models/entities/BookModel";
import { APIProvider } from "./APIProvider";
import axios from 'axios';
const getAllBooks = async ():Promise<Array<BookModel>> => {
    try{
      const response : ResponseData = await APIProvider.get("/books");
      return response.data as Array<BookModel>;
    }
    catch(error : any){
          throw error.response.data as ErrorResponseData;
    }
  }


  
   const AddBook = async (book: BookModel): Promise<any> => {
      try {
          const response: ResponseData = await APIProvider.post('/books', book);
          toast.success("Book Added Successfully ")
          return response.data;
          
      } catch (error: any) {
          throw error.response.data as ErrorResponseData;
      }
  };
  
  const borrowBook = async (userId: number, bookId: number): Promise<void> => {
    try {
        await APIProvider.post(`/books/${bookId}/borrowedBy/${userId}`);
    } catch (error: any) {
        if (axios.isAxiosError(error) && error.response) {
            const responseData: ErrorResponseData = error.response.data;
            throw new Error(responseData.message);
        } else {
            throw new Error('An error occurred while borrowing the book.');
        }
    }
};

  
  export {getAllBooks,borrowBook,AddBook}