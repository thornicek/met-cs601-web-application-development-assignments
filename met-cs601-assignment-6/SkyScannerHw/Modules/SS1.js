export function MyQuoteFetch(){
	fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2021-12-01?inboundpartialdate=2019-12-01", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
			"x-rapidapi-key": "61b183e1b1msh4e56219adda64edp1a8300jsnbdbcf9258ed5"
		}
	})
	.then(response => {
		console.log(response);
	})
	.catch(err => {
		console.error(err);
	});
}