import BorrowModel from "./BorrowModel";
import ReviewModel from "./ReviewModel";

interface UserModel {
  id: number;
  username: string;
  email: string;
  borrows: BorrowModel[];
  reviews: ReviewModel[];
}

export default UserModel;
