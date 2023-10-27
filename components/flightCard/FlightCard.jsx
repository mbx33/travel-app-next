import React from 'react';

const FlightCard = ({ flights }) => {
	console.log(flights);
	return (
		<div>
			{flights.map((flight) => (
				<div key={flight.id}>
					<h1>Airline {flight.validatingAirlineCodes[0]}</h1>
					<p>Total ${flight.price['total']}</p>
					<p>Seats Left: {flight.numberOfBookableSeats}</p>
				</div>
			))}
		</div>
	);
};

export default FlightCard;
