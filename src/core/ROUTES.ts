
import AddBook from "../composants/Books/AddBook";
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

]

export {ROUTES}