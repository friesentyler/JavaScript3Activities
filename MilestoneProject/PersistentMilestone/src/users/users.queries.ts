export const userQueries = {
	registerUser: `INSERT INTO users (user_name, email, password, isAdmin) VALUES (?, ?, ?, ?)`,
	loginUser: `SELECT user_id as userId, user_name as username, email, isAdmin FROM users WHERE email = ? AND password = ?`,
	getUserProfile: `SELECT user_id as userId, user_name as username, email, isAdmin FROM users WHERE user_id = ?`,
	getAllUsers: `SELECT user_id as userId, user_name as username, email, isAdmin FROM users`
};
