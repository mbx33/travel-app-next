import { useState } from 'react';

import styles from '../../styles/Flights.module.css';
import Navbar from '../../components/navbar/Navbar';

const FlightPage = () => {
	const [origin, setOrigin] = useState('');
	const [destination, setDestination] = useState('');
	const [departureDate, setDepartureDate] = useState('');
	const [pax, setPax] = useState('');
	const [flights, setFlights] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch('http://localhost:3000/api/flights', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ origin, destination, departureDate, pax }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data, 'data');
				// setFlights(data);
			});
	};

	return (
		<div>
			<Navbar />
			<h1>Search Flights</h1>
			<div className={styles.container}>
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="from">From: </label>
						<input
							type="text"
							id="from"
							value={origin}
							onChange={(e) => setOrigin(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="to">To: </label>
						<input
							type="text"
							id="to"
							value={destination}
							onChange={(e) => setDestination(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="pax"># of passengers</label>
						<input
							type="number"
							id="pax"
							onChange={(e) => setPax(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="date">Departure Date</label>
						<input
							type="date"
							id="date"
							value={departureDate}
							onChange={(e) => setDepartureDate(e.target.value)}
						/>
					</div>
					<button type="submit">Search</button>
				</form>
			</div>
		</div>
	);
};

export default FlightPage;
