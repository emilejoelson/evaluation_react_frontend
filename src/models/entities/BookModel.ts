import BorrowModel from "./BorrowModel";
import ReviewModel from "./ReviewModel";

interface BookModel {
  id: number;
  title: string;
  author: string;
  summary: string;
  genre: string;
  borrows: BorrowModel[];
  reviews: ReviewModel[];
}

export default BookModel;
