const Amadeus = require('amadeus');

let amadeus = new Amadeus({
	clientId: `${process.env.API_KEY}`,
	clientSecret: `${process.env.API_SECRET}`,
});

export default async function getFlights(req, res) {
	const { origin, destination, departureDate, pax } = req.body;
	console.log(origin, destination, departureDate, pax, 'off the req.body');
	const results = await amadeus.shopping.flightOffersSearch.get({
		originLocationCode: origin,
		destinationLocationCode: destination,
		departureDate: departureDate,
		adults: pax,
	});

	console.log(results.data, 'results.data');
	res.status(200).send(results.data);
}
