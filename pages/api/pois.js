const Amadeus = require('amadeus');

const token = process.env.POSITION_API_TOKEN;

let amadeus = new Amadeus({
	clientId: `${process.env.API_KEY}`,
	clientSecret: `${process.env.API_SECRET}`,
});

export default async function getPois(req, res) {
	const { city, country } = req.body;
	const geoPosition = await fetch(
		`http://api.positionstack.com/v1/forward?access_key=${token}&query=${city},${country}`
	);
	const geoData = await geoPosition.json();
	console.log(geoData);
	const { latitude, longitude } = geoData.data[0];

	console.log(latitude, longitude);

	// comment back in when ready to make requests to the api
	// await amadeus.referenceData.locations.pointsOfInterest
	// 	.get({
	// 		latitude,
	// 		longitude,
	// 	})
	// 	.then((response) => {
	// 		// console.log(response.data);
	// 		res.status(200).send(response.data);
	// 	})
	// 	.catch((responseError) => {
	// 		console.log(responseError.code, responseError);
	// 	});
}

//Cities available in the test API
// const cities = [
// 	{ city: 'Bangalore', country: 'India' },
// 	{ city: 'Barcelona', country: 'Spain' },
// 	{ city: 'Berlin', country: 'Germany' },
// 	{ city: 'Dallas', country: 'USA' },
// 	{ city: 'London', country: 'United Kingdom' },
// 	{ city: 'New York', country: 'USA' },
// 	{ city: 'Paris', country: 'France' },
// 	{ city: 'San Francisco', country: 'USA' },
// ]
