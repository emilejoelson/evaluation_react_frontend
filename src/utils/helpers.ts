import BookModel from "../models/entities/BookModel";
import BorrowModel from "../models/entities/BorrowModel";
import ReviewModel from "../models/entities/ReviewModel";
import UserModel from "../models/entities/UserModel";

const validateUserForm = (user: UserModel): void => {
    try {
        const validationErrors: Array<string> = [];

        if (!user.username) {
            validationErrors.push('Username is required');
        }

        if (!user.email) {
            validationErrors.push('Email is required');
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(user.email)) {
                validationErrors.push('Invalid email format');
            }
        }

        if (validationErrors.length > 0) {
            throw new Error(validationErrors.join(', '));
        }
    } catch (error) {
        alert(error.message);
    }
};

const validateBorrowForm = (borrow: BorrowModel): void => {
    try {
        let errorMessage = '';

        if (!borrow.returnDate) {
            errorMessage += 'Return date is required.\n';
        } else {
            if (new Date(borrow.borrowingDate) >= new Date(borrow.returnDate)) {
                errorMessage += 'Return date must be after borrowing date.\n';
            }
        }
        if (!borrow.user || !borrow.user.id) {
            errorMessage += 'User information is required.\n';
        }

        if (!borrow.book || !borrow.book.id) {
            errorMessage += 'Book information is required.\n';
        }

        if (errorMessage) {
            throw new Error(errorMessage);
        }
    } catch (error) {
        alert(error.message);
    }
};

const validateReviewText = (review: ReviewModel): void => {
    try {
        let errorMessage = '';

        if (!review.reviewText) {
            errorMessage += 'Review text is required.\n';
        } else if (review.reviewText.length < 10) {
            errorMessage += 'Review text must be at least 10 characters long.\n';
        }

        if (errorMessage) {
            throw new Error(errorMessage);
        }
    } catch (error) {
        alert(error.message);
    }
};

const validateBookForm = (book: BookModel): void => {
    try {
        let errorMessage = '';

        if (!book.title) {
            errorMessage += 'Title is required.\n';
        }

        if (!book.author) {
            errorMessage += 'Author is required.\n';
        }

        if (!book.summary) {
            errorMessage += 'Summary is required.\n';
        }

        if (!book.genre) {
            errorMessage += 'Genre is required.\n';
        }

        if (errorMessage) {
            throw new Error(errorMessage);
        }
    } catch (error) {
        alert(error.message);
    }
};

export { validateUserForm, validateBorrowForm, validateReviewText, validateBookForm };
