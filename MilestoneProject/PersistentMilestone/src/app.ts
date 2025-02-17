// import the types for request and responses as well as the express library
import express, { Request, Response } from 'express';
import ratingsRouter from './ratings/ratings.routes';
import usersRouter from './users/users.routes';
import listingsRouter from './listings/listings.routes';
import chatsRouter from './chats/chats.routes';
//import artistsRouter from './artists/artists.routes';
import logger from './middleware/logger.middleware';
import cors from 'cors';
import helmet from 'helmet';

import dotenv from "dotenv";
import { listingsQueries } from './listings/listings.queries';

dotenv.config();

// creates an instance of the express application
const app = express();
// setting the port number for the application
const port = process.env.PORT;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

if (process.env.NODE_ENV == 'development') {
	app.use(logger);
	console.log(process.env.GREETING + ' in dev mode');
}

//app.use('/', [albumsRouter, artistsRouter]);
app.use('/', [ratingsRouter, usersRouter, listingsRouter, chatsRouter]);

app.get('/', (req, res) => {
	res.send("Hello World!");
});

// tell the http server to start
app.listen(port, () => {
	// print to the server console that the server has started on the specified port
	console.log(`Example app listening at http://localhost:${port}`);
});
