import { Request, RequestHandler, Response } from 'express';
import * as UsersDAO from './users.dao';
import { OkPacket } from 'mysql';
import { sign } from 'jsonwebtoken'; // For JWT

export const registerUser: RequestHandler = async (req: Request, res: Response) => {
	try {
		const newUser = { ...req.body, isAdmin: 0 }; // Default to regular user (isAdmin = 0)
		const result: OkPacket = await UsersDAO.registerUser(newUser);
		res.status(201).json({ message: 'User registered successfully' });
	} catch (error) {
		console.error('[users.controller][registerUser][Error] ', error);
		res.status(500).json({ message: 'There was an error registering the user' });
	}
};

export const loginUser: RequestHandler = async (req: Request, res: Response) => {
	try {
		const users = await UsersDAO.loginUser(req.body.email, req.body.password);
		if (users.length === 0) {
			res.status(401).json({ message: 'Invalid email or password' });
		}

		const token = sign({ userId: users[0].userId, isAdmin: users[0].isAdmin }, 'your_jwt_secret', { expiresIn: '1h' });
		res.status(200).json({ token, user: users[0] });
	} catch (error) {
		console.error('[users.controller][loginUser][Error] ', error);
		res.status(500).json({ message: 'There was an error logging in' });
	}
};

export const getUserProfile: RequestHandler = async (req: Request, res: Response) => {
	try {
		const userId = parseInt(req.params.userId);
		console.log(userId);
		if (Number.isNaN(userId)) {
			const users = await UsersDAO.getAllUsers();
			res.status(200).json(users);
		} else {
			const users = await UsersDAO.getUserProfile(userId);
			if (users.length === 0) {
				res.status(404).json({ message: 'User not found' });
			}
			res.status(200).json(users[0]);
		}
	} catch (error) {
		console.error('[users.controller][getUserProfile][Error] ', error);
		res.status(500).json({ message: 'There was an error fetching the user profile' });
	}
};
