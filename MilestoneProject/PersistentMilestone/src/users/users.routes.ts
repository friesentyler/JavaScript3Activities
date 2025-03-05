import { Router } from 'express';
import * as UsersController from './users.controller';

const router = Router();

/*
## 1. User API

### POST /users/register
Allows new users to create an account by providing their username, email, and password.

**Request Body:**
```
{
  "username": "exampleuser",
  "email": "example@example.com",
  "password": "password123"
}
```

**Response:**
- Success or failure message indicating whether the account was created.

---
*/
router
	.route('/users/register')
	.post(UsersController.registerUser);

/*
### POST /users/login
Allows registered users to log in to their account using their email and password.

**Request Body:**
```
{
  "email": "example@example.com",
  "password": "password123"
}
```

**Response:**
- JSON Web Token (JWT) for authentication, or error if credentials are invalid.

---
*/
router
	.route('/users/login')
	.post(UsersController.loginUser);


/*
### GET /users/{userId}
Retrieves a specific user’s profile by their user ID, allowing others to see their profile, trade history, and ratings.

**Response:**
- User details, including username, location, favorite genres, and ratings.

---
*/
router
	.route('/users/:userId?')
	.get(UsersController.getUserProfile);

export default router;

