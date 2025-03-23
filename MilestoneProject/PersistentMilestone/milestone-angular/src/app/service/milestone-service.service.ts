import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { environment } from '../../environments/environment';
import { User } from '../models/User';
import { Listing } from '../models/Listing';
import { Rating } from '../models/Rating';
import { Chat } from '../models/Chat';

@Injectable({
  providedIn: 'root',
})
export class MilestoneServiceService {
  private apiUrl = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  // Users
  registerUser(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/register`, user);
  }

  loginUser(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/login`, credentials);
  }

  getUserById(userId: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${userId}`);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  // Listings
  createListing(listing: Listing): Observable<any> {
    return this.http.post(`${this.apiUrl}/listings`, listing);
  }

  getAllListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>(`${this.apiUrl}/listings`);
  }

  getListingById(listingId: string): Observable<Listing> {
    return this.http.get<Listing>(`${this.apiUrl}/listings/${listingId}`);
  }

  updateListing(listingId: string, listing: Listing): Observable<any> {
    return this.http.put(`${this.apiUrl}/listings/${listingId}`, listing);
  }

  deleteListing(listingId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/listings/${listingId}`);
  }

  // Ratings
  rateListing(listingId: string, rating: Rating): Observable<any> {
    return this.http.post(`${this.apiUrl}/ratings`, { listingId, rating });
  }

  getRatingsForListing(listingId: string): Observable<Rating[]> {
    return this.http.get<Rating[]>(`${this.apiUrl}/ratings/${listingId}`);
  }

  getAllRatings(): Observable<Rating[]> {
    return this.http.get<Rating[]>(`${this.apiUrl}/ratings`);
  }

  // Chats
  initiateChat(chat: Chat): Observable<any> {
    return this.http.post(`${this.apiUrl}/chats`, chat);
  }

  getChatById(chatId: string): Observable<Chat> {
    return this.http.get<Chat>(`${this.apiUrl}/chats/${chatId}`);
  }

  getChatsForUser(userId: string): Observable<Chat[]> {
    return this.http.get<Chat[]>(`${this.apiUrl}/chats/user/${userId}`);
  }
}

