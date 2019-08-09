const BASE = 'http://localhost:3000'

let getCount = function() {
// the function name getTrolls is intended to remind you of the restful rails route --> GET '/trolls'.
	return fetch(BASE + '/inventories/get_count')
		.then((resp) => {
           	// resp will be whatever you saw on the page localhost:3000/trolls, it is the result of our fetch call
			let json = resp.json() // we want to make sure what we have is just the json part of the response
			return json
		})
}


export  {
	getCount
}
