import { execute } from '../services/mysql.connector';
import { OkPacket } from 'mysql';
import { chatsQueries } from './chats.queries';
import { ChatMessage } from './chats.model';

// Add a message to a chat
export const addMessage = async (chatMessage: ChatMessage) => {
	const result = await execute<OkPacket>(chatsQueries.addMessage, [
		chatMessage.senderId,
		chatMessage.receiverId,
		chatMessage.messageContent,
		chatMessage.timestamp,
	]);
	return result;
};

// Get chat history for a specific chat
export const getChatHistory = async (senderId: number, receiverId: number) => {
	const result = await execute<ChatMessage[]>(chatsQueries.getChatHistory, [
		senderId,
		receiverId,
		receiverId,
		senderId,
	]);
	return result;
};
