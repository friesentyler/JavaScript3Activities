import { Router } from 'express';
import * as RatingsController from './ratings.controller';

const router = Router();

/* 
### POST /ratings/{userId}
After a trade is completed, users can leave a rating for each other, assessing their experience with the trade.

**Request Body:**
```
{
  "rating": 5,
  "review": "Great trade! The record was in perfect condition."
}
```

**Response:**
- Success message and updated user rating.
*/
router
	.route('/ratings')
	.post(RatingsController.leaveRating);

/*
### GET /ratings/{userId}
Retrieves all ratings and reviews for a specific user, allowing others to assess their trade history.

**Response:**
- List of ratings and reviews.

---

This RESTful API provides the foundational structure for handling all key interactions in the Vinyl Record Swap Meet application, focusing on scalability, flexibility, and maintainability.
*/

router
	.route('/ratings/:userId?')
	.get(RatingsController.readRatings);

export default router;

