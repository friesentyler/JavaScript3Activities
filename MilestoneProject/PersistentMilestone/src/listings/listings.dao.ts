import { OkPacket } from 'mysql';
import { execute } from '../services/mysql.connector';
import { listingsQueries } from './listings.queries';
import { Listing } from './listings.model';

export const addListing = async (listing: Listing) => {
	const result = await execute<OkPacket>(listingsQueries.addListing, [
		listing.listerId,
		listing.artist,
		listing.albumTitle,
		listing.condition,
		listing.imageUrl,
	]);
	return result;
};

export const readListings = async (query: any) => {
	const result = await execute<any[]>(listingsQueries.readListings, [
		query.artist || null,
		query.artist || null,
		query.condition || null,
		query.condition || null,
		query.location || null,
		query.location || null
	]);
	return result;
};

export const updateListing = async (listingId: number, listing: Partial<Listing>) => {
	const result = await execute<OkPacket>(listingsQueries.updateListing, [
		listing.artist,
		listing.albumTitle,
		listing.condition,
		listing.imageUrl,
		listingId
	]);
	return result;
};

export const removeListing = async (listingId: number) => {
	const result = await execute<OkPacket>(listingsQueries.removeListing, [listingId]);
	return result;
};

