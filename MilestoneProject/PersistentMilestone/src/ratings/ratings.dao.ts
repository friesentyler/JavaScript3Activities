import { OkPacket } from "mysql";
import { Rating } from "./ratings.model";
import { execute } from "../services/mysql.connector";
import { ratingsQueries } from './ratings.queries';

export const readRatings = async () => {
	return execute<Rating[]>(ratingsQueries.readRatings, []);
};

export const readRatingsByUserId = async (userId: number) => {
	return execute<Rating>(ratingsQueries.readRatingsByUserId, [userId]);
};

export const addRating = async (rating: Rating) => {
	return execute<OkPacket>(ratingsQueries.leaveRating,
		[rating.rateeId, rating.raterId, rating.rating, rating.ratingText]);
};

