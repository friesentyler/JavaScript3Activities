export const listingsQueries = {
	addListing: `INSERT INTO Listings (lister_id, artist, title, record_condition, image_location) VALUES (?, ?, ?, ?, ?)`,
	readListings: `SELECT * FROM Listings WHERE (artist = ? OR ? IS NULL) AND (record_condition = ? OR ? IS NULL) AND (title = ? OR ? IS NULL)`,
	updateListing: `UPDATE Listings SET artist = COALESCE(?, artist), title = COALESCE(?, title), record_condition = COALESCE(?, record_condition), image_location = COALESCE(?, image_location) WHERE order_id = ?`,
	removeListing: `DELETE FROM Listings WHERE order_id = ?`
};

