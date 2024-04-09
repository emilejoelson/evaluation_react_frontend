
import AddBook from "../composants/Book/AddBook";
import BookDetails from "../composants/Book/BookDetails"
import AddUser from "../composants/User/AddUser";
import Book from "../pages/Book";
import User from "../pages/User";

const ROUTES = [
    {
        path : "users",
        element : User
    }
    ,
    {
        path : "add-user",
        element : AddUser
    },
    {
        path : "books",
        element : Book
    }
    ,{
        path : "add-book",
        element : AddBook
    },
    {
        path: "book-details/:bookId", 
        element: BookDetails
    }

]

export {ROUTES}