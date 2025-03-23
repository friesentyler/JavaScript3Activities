export interface Chat {
  chatId?: number;
  senderId: number;
  receiverId: number;
  messageContent: string;
  timestamp: Date;
}
