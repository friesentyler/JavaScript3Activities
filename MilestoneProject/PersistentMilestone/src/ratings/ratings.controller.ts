import { Request, RequestHandler, Response } from 'express';
import { Rating } from './ratings.model';
//import { Track } from './../tracks/tracks.model';
import * as RatingsDAO from './ratings.dao';
//import * as TracksDao from '../tracks/tracks.dao';
import { OkPacket } from 'mysql';

export const readRatings: RequestHandler = async (req: Request, res: Response) => {
	try {
		let ratings;
		let userId = parseInt(req.params.userId as string);

		console.log('userId', userId);
		if (Number.isNaN(userId)) {
			ratings = await RatingsDAO.readRatings();
		} else {
			ratings = await RatingsDAO.readRatingsByUserId(userId);
		}

		res.status(200).json(
			ratings
		);
	} catch (error) {
		console.error('[ratings1.controller][readRatings][Error] ', error);
		res.status(500).json({
			message: 'There was an error when fetching Ratings'
		});
	}
};

export const leaveRating: RequestHandler = async (req: Request, res: Response) => {
	try {
		const okPacket: OkPacket = await RatingsDAO.addRating(req.body);
		console.log('req.body', req.body);
		console.log('album', okPacket);

		res.status(200).json(okPacket);
	} catch (error) {
		console.error('[ratings.controller][addRating][Error] ', error);
		res.status(500).json({
			message: 'There was an error when adding a rating'
		});
	}
};

