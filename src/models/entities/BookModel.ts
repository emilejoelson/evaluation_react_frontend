import UserModel from "./UserModel";

interface BookModel {
  id: number;
  title: string;
  author: string;
  summary: string;
  genre: string;
  borrowingDate: Date;
  user: UserModel;
  }
  
  export default BookModel;
  