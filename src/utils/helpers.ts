import UserModel from "../models/entities/UserModel";

const validateUserForm = (user: UserModel): void => {
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
};

export { validateUserForm };
