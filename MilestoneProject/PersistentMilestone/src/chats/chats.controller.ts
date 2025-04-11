import { Request, Response } from 'express';
import * as ChatsDAO from './chats.dao';
import { OkPacket } from 'mysql';

// Send a new message or continue a chat
export const sendMessage = async (req: Request, res: Response) => {
	try {
		//const { listingId } = req.params;
		const { senderId, receiverId, message } = req.body;

		const chatResult: OkPacket = await ChatsDAO.addMessage({
			//chatId: parseInt(listingId),
			senderId,
			receiverId,
			messageContent: message,
			timestamp: new Date(),
		});

		res.status(200).json({
			message: 'Message sent successfully',
			chatResult,
		});
	} catch (error) {
		console.error('[ChatsController][sendMessage][Error]', error);
		res.status(500).json({
			message: 'There was an error sending the message',
		});
	}
};

// Get chat history for a specific chat
export const getChatHistory = async (req: Request, res: Response) => {
	try {
		const { senderId, receiverId } = req.params;
		const chatHistory = await ChatsDAO.getChatHistory(parseInt(senderId), parseInt(receiverId));

		res.status(200).json(chatHistory);
	} catch (error) {
		console.error('[ChatsController][getChatHistory][Error]', error);
		res.status(500).json({
			message: 'There was an error retrieving the chat history',
		});
	}
};
