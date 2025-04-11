import { OkPacket } from "mysql";
import { User } from "./users.model";
import { execute } from "../services/mysql.connector";
import { userQueries } from './users.queries';

export const registerUser = async (user: User) => {
	return execute<OkPacket>(userQueries.registerUser, [user.username, user.email, user.password, user.isAdmin]);
};

export const loginUser = async (email: string, password: string) => {
	return execute<User[]>(userQueries.loginUser, [email, password]);
};

export const getUserProfile = async (userId: number) => {
	return execute<User[]>(userQueries.getUserProfile, [userId]);
};

export const getAllUsers = async () => {
	return execute<User[]>(userQueries.getAllUsers, []);
};

