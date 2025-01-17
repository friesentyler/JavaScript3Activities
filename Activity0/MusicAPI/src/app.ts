// import the types for request and responses as well as the express library
import express, { Request, Response } from 'express';

// creates an instance of the express application
const app = express();
// setting the port number for the application
const port = 3000;

// setting up the default route (the slash route)
app.get('/', (req: Request, res: Response) => {
	// sending the response to the client after visiting the route
	res.send('Hello World from Typescript!');
});

// tell the http server to start
app.listen(port, () => {
	// print to the server console that the server has started on the specified port
	console.log(`Example app listening at http://localhost:${port}`);
});
