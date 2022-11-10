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

	// await amadeus.referenceData.locations.pointsOfInterest
	// 	.get({
	// 		latitude,
	// 		longitude,
	// 		category: 'RESTAURANT',
	// 	})
	// 	.then((response) => {
	// 		// console.log(response.data);
	// 		res.status(200).send(response.data);
	// 	})
	// 	.catch((responseError) => {
	// 		console.log(responseError.code, responseError);
	// 	});
}
