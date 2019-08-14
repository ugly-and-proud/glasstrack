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
let getPrice = function() {
// the function name getTrolls is intended to remind you of the restful rails route --> GET '/trolls'.
	return fetch(BASE + '/inventories/get_price')
		.then((resp) => {
           	// resp will be whatever you saw on the page localhost:3000/trolls, it is the result of our fetch call
			let json = resp.json() // we want to make sure what we have is just the json part of the response
			return json
		})
}

let changeWine = function(change_object) {
// the function name getTrolls is intended to remind you of the restful rails route --> GET '/trolls'.
	var an_object = {
		wine_bottle:change_object
	}
	console.log('Index Change Wine');
	console.log(change_object);
	return fetch(BASE + '/inventories/change_wine',{
		method: 'POST',
		headers: {'Content-Type':'application/json'},
		body: JSON.stringify(an_object)
	}).then((resp) => {
			let json = resp.json()
			return json
		})
}
let changeBeer = function(change_object) {
// the function name getTrolls is intended to remind you of the restful rails route --> GET '/trolls'.
	var an_object = {
		beer_bottle:change_object
	}
	console.log('Index Change Wine');
	console.log(change_object);
	return fetch(BASE + '/inventories/change_beer',{
		method: 'POST',
		headers: {'Content-Type':'application/json'},
		body: JSON.stringify(an_object)
	}).then((resp) => {
			let json = resp.json()
			return json
		})
}

export  {
	getCount,
	changeWine,
	getPrice,
	changeBeer
}
