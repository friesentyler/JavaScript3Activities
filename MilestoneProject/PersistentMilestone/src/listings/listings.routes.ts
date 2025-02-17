import { Router } from 'express';
import * as ListingsController from './listings.controller';

const router = Router();

/*
### POST /listings
Authenticated users can create a new listing to trade a vinyl record. The listing includes information like the artist, album title, condition, and genres.

**Request Body:**
```
{
  "artist": "Pink Floyd",
  "albumTitle": "The Dark Side of the Moon",
  "condition": "Very Good",
  "genres": ["rock", "progressive rock"],
  "imageUrl": "link_to_image.jpg"
}
```

**Response:**
- Success message and listing details.

---
*/

/*
### GET /listings
Retrieves a list of all available vinyl record listings. The query parameters allow filtering and sorting by genres, artist, condition, and location.

**Query Parameters:**
- `genre=rock`
- `artist=Pink Floyd`
- `condition=good`
- `location=New York`

**Response:**
- A list of matching listings.

---
*/
router
	.route('/listings')
	.post(ListingsController.createListing)
	.get(ListingsController.getListings);



/*
### PUT /listings/{listingId}
Allows authenticated users to edit an existing listing they created. They can update the album details, condition, genres, and images.

**Request Body:**
```
{
  "condition": "Excellent",
  "genres": ["rock", "psychedelic rock"]
}
```

**Response:**
- Updated listing details.

---
*/


/*
### DELETE /listings/{listingId}
Authenticated users can delete their own listings, removing them from the platform.

**Response:**
- Success message if deletion was successful.

---
*/
router
	.route('/listings/:listingId')
	.put(ListingsController.updateListing)
	.delete(ListingsController.deleteListing);

export default router;

