import toast from "react-hot-toast";
import ReviewModel from "../models/entities/ReviewModel";
import { APIProvider } from "./APIProvider";
import ErrorResponseData from "../models/dataTypes/ErrorResponseData";
import ResponseData from "../models/dataTypes/ResponseData";


const reviewBook = async (review: ReviewModel): Promise<any> => {
    try {
        const response: ResponseData = await APIProvider.post('/reviews', review);
        toast.success("Review Successfully ")
        return response.data;
        
    } catch (error: any) {
        throw error.response.data as ErrorResponseData;
    }
};

const getReviewsByBookId = async (bookId: number): Promise<any> => {
    try {
        const response: ResponseData = await APIProvider.get(`/reviews/byBookId/${bookId}`);
        return response.data;
    } catch (error: any) {
        throw error.response.data as ErrorResponseData;
    }
};

export {reviewBook,getReviewsByBookId}