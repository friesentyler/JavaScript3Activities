import { Router } from 'express';
import * as ChatsController from './chats.controller';

const router = Router();

/*
### POST /trades/{listingId}/chat
Initiates or continues a chat between the two users discussing a trade for a specific listing.

**Request Body:**
```
{
  "message": "Would you be willing to trade for my Led Zeppelin IV?"
}
```

**Response:**
- Success message with chat history.

---
*/
router
	.route('/chats')
	.post(ChatsController.sendMessage); // Initiate or continue a chat

router
	.route('/chats/:senderId/:receiverId')
	.get(ChatsController.getChatHistory); // Retrieve chat history for a specific chat

export default router;

