import { UserTypes } from "../entity/User.entity.js";

export interface User {
    email: string;
    password: string;
}

export interface UserInfo extends User {
    fullName: string;
    isAdmin: boolean;
    createdAt: string;
    updatedAt: string;
    userType: UserTypes;
}