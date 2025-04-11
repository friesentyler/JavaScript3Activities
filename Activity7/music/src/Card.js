import React from 'react';
import ReactDOM from 'react-dom/client';

const Card = (props) => {

	const handleButtonClick = (event, uri) => {
		console.log('ID clicked is ' + props.albumId);
		props.onClick(props.albumId, uri);
	};

	return (
		<>
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
			<div className="card" style={{ width: "18rem" }}>
				<img src={props.imageURL} className="card-img-top" alt="Image name" />
				<div className="card-body">
					<h5 className="card-title">{props.albumTitle}</h5>
					<p className="card-text">{props.albumDescription}</p>
					<button
						onClick={() => handleButtonClick(props.albumId, '/show/')}
						className='btn btn-primary'
					>
						{props.buttonText}
					</button>
					<button
						onClick={() => handleButtonClick(props.albumId, '/edit/')}
						className='btn btn-secondary'
					>
						Edit
					</button>
				</div>
			</div>
		</>

	);
};

export default Card;
