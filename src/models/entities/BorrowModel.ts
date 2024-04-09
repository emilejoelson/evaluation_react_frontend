import UserModel from "./UserModel";
import BookModel from "./BookModel";

interface BorrowModel {
  id: number;
  borrowingDate: Date;
  returnDate: Date;
  user: UserModel;
  book: BookModel;
}

export default BorrowModel;
