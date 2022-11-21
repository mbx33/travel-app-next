import { useState } from 'react';
import axios from 'axios';

import styles from '../../styles/Flights.module.css';
import Navbar from '../../components/navbar/Navbar';

const FlightPage = () => {
	const [origin, setOrigin] = useState('');
	const [destination, setDestination] = useState('');
	const [departureDate, setDepartureDate] = useState('');
	const [pax, setPax] = useState(0);
	const [flights, setFlights] = useState([]);

	const reset = () => {
		setOrigin('');
		setDestination('');
		setDepartureDate('');
		setPax(0);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await axios.post('/api/flights', {
			origin,
			destination,
			departureDate,
			pax,
		});
		reset();
		console.log(response.data);
		// setFlights(response.data);
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
