export interface ChatMessage {
	chatId?: number;
	senderId: number;
	receiverId: number;
	messageContent: string;
	timestamp: Date;
}
