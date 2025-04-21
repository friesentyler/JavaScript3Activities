import React, { useEffect, useState } from 'react';
import MilestoneService from '../services/MilestoneService';

function Ratings() {
  const [ratings, setRatings] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);

  useEffect(() => {
    MilestoneService.getAllRatings()
      .then(response => {
        setRatings(response.data);
      })
      .catch(error => {
        console.error("Failed to fetch ratings", error);
      });
  }, []);

  const handleSelectRating = (rating) => {
    setSelectedRating(rating);
  };

  return (
    <div>
      {ratings ? (
        <>
          <h2>Ratings List</h2>
          <ul>
            {ratings.map(rating => (
              <li key={rating.ratingId} onClick={() => handleSelectRating(rating)}>
                Rating ID: {rating.ratingId} - Rating: {rating.rating}
              </li>
            ))}
          </ul>

          {selectedRating && (
            <div>
              <h3>Selected Rating Details</h3>
              <p>Rating ID: {selectedRating.ratingId}</p>
              <p>Ratee ID: {selectedRating.rateeId}</p>
              <p>Rater ID: {selectedRating.raterId}</p>
              <p>Rating: {selectedRating.rating}</p>
              <p>Rating Text: {selectedRating.ratingText}</p>
            </div>
          )}
        </>
      ) : (
        <p>No ratings available</p>
      )}
    </div>
  );
}

export default Ratings;

