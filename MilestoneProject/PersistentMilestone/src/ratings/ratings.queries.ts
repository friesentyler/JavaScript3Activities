
export const ratingsQueries = {
	readRatings: `SELECT rating_id as ratingId, ratee_id AS rateeId, rater_id AS raterId, rating AS rating, rating_text as ratingText FROM VinylRecords.Ratings`,
	readRatingsByUserId: `SELECT rating_id as ratingId, ratee_id AS rateeId, rater_id AS raterId, rating AS rating, rating_text as ratingText FROM VinylRecords.Ratings WHERE VinylRecords.Ratings.ratee_id = ?`,
	leaveRating: `INSERT INTO RATINGS(ratee_id, rater_id, rating, rating_text) VALUES(?,?,?,?)`,
}
