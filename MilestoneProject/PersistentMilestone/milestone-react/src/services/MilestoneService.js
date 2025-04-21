import axios from 'axios';
//import { User } from '../models/User';
//import { Listing } from '../models/Listing';
//import { Rating } from '../models/Rating';
//import { Chat } from '../models/Chat';

const apiUrl = 'http://localhost:3000';

const MilestoneService = {
  // Users
  registerUser: (user) => axios.post(`${apiUrl}/users/register`, user),
  loginUser: (credentials) => axios.post(`${apiUrl}/users/login`, credentials),
  getUserById: (userId) => axios.get(`${apiUrl}/users/${userId}`),
  getAllUsers: () => axios.get(`${apiUrl}/users`),

  // Listings
  createListing: (listing) => axios.post(`${apiUrl}/listings`, listing),
  getAllListings: () => axios.get(`${apiUrl}/listings`),
  getListingById: (listingId) => axios.get(`${apiUrl}/listings/${listingId}`),
  updateListing: (listingId, listing) => axios.put(`${apiUrl}/listings/${listingId}`, listing),
  deleteListing: (listingId) => axios.delete(`${apiUrl}/listings/${listingId}`),

  // Ratings
  rateListing: (listingId, rating) => axios.post(`${apiUrl}/ratings`, { listingId, rating }),
  getRatingsForListing: (listingId) => axios.get(`${apiUrl}/ratings/${listingId}`),
  getAllRatings: () => axios.get(`${apiUrl}/ratings`),

  // Chats
  initiateChat: (chat) => axios.post(`${apiUrl}/chats`, chat),
  getChatById: (chatId) => axios.get(`${apiUrl}/chats/${chatId}`),
  getChatsForUser: (userId) => axios.get(`${apiUrl}/chats/user/${userId}`),
};

export default MilestoneService;

