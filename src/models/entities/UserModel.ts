import BookModel from "./BookModel";

interface UserModel {
    id: number;
    username: string,
    email:string,
    books: BookModel[];
  }
  
  export default UserModel;
 