// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const Amadeus = require('amadeus');

let amadeus = new Amadeus({
	clientId: `${process.env.API_KEY}`,
	clientSecret: `${process.env.API_SECRET}`,
});

export default async function getFlights(req, res) {
	await amadeus.shopping.flightOffersSearch
		.get({
			originLocationCode: 'SLC',
			destinationLocationCode: 'LAX',
			departureDate: '2022-12-01',
			adults: '2',
			max: 3,
		})
		.then((response) => {
			res.status(200).send(response.data);
		})
		.catch((responseError) => {
			console.log(responseError.code, responseError);
		});
}
