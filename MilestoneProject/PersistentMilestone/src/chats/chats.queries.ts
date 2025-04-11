export const chatsQueries = {
	// Query to insert a new message into the chat
	addMessage: `INSERT INTO Chats (sender_id, receiver_id, message_content, timestamp) VALUES (?, ?, ?, ?)`,

	// Query to retrieve the chat history
	getChatHistory: `SELECT chat_id, sender_id, receiver_id, message_content, timestamp FROM Chats WHERE (sender_id = ? AND receiver_id = ?) OR (sender_id = ? AND receiver_id = ?) ORDER BY timestamp ASC`,
};
