import { Request, Response } from 'express';
import * as ListingsDAO from './listings.dao';
import { Listing } from './listings.model';

export const createListing = async (req: Request, res: Response) => {
	try {
		const listing: Listing = req.body;
		const result = await ListingsDAO.addListing(listing);
		res.status(200).json({ message: "Listing created successfully", listing: result });
	} catch (error) {
		console.error('[listings.controller][createListing][Error] ', error);
		res.status(500).json({ message: 'Error creating listing' });
	}
};

export const getListings = async (req: Request, res: Response) => {
	try {
		const listings = await ListingsDAO.readListings(req.query);
		const newListings: Listing[] = [];
		for (let i = 0; i < listings.length; i++) {
			let record = {
				artist: listings[i].artist,
				albumTitle: listings[i].title,
				listerId: listings[i].lister_id,
				condition: listings[i].record_condition,
				imageUrl: listings[i].image_location,
				listingId: listings[i].order_id
			};
			newListings.push(record);
		}
		res.status(200).json(newListings);
	} catch (error) {
		console.error('[listings.controller][getListings][Error] ', error);
		res.status(500).json({ message: 'Error retrieving listings' });
	}
};

export const updateListing = async (req: Request, res: Response) => {
	try {
		const listingId = parseInt(req.params.listingId);
		const updatedListing = req.body;
		const result = await ListingsDAO.updateListing(listingId, updatedListing);
		res.status(200).json({ message: 'Listing updated successfully', listing: result });
	} catch (error) {
		console.error('[listings.controller][updateListing][Error] ', error);
		res.status(500).json({ message: 'Error updating listing' });
	}
};

export const deleteListing = async (req: Request, res: Response) => {
	try {
		const listingId = parseInt(req.params.listingId);
		await ListingsDAO.removeListing(listingId);
		res.status(200).json({ message: 'Listing deleted successfully' });
	} catch (error) {
		console.error('[listings.controller][deleteListing][Error] ', error);
		res.status(500).json({ message: 'Error deleting listing' });
	}
};

