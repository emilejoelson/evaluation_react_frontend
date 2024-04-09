import UserModel from "./UserModel";
import BookModel from "./BookModel";

interface ReviewModel {
  id: number;
  reviewText: string;
  rating: number;
  user: UserModel;
  book: BookModel;
}

export default ReviewModel;
