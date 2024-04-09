import toast from "react-hot-toast";
import ErrorResponseData from "../models/dataTypes/ErrorResponseData";
import ResponseData from "../models/dataTypes/ResponseData";
import BookModel from "../models/entities/BookModel";
import { APIProvider } from "./APIProvider";
import { validateBookForm } from "../utils/helpers";
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
          validateBookForm(book)
          const response: ResponseData = await APIProvider.post('/books', book);
          toast.success("Book Added Successfully ")
          return response.data;
          
      } catch (error: any) {
          throw error.response.data as ErrorResponseData;
      }
  };
  

  
  export {getAllBooks,AddBook}