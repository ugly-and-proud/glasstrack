const BASE = 'http://localhost:3000'

let getCount = function() {
	return fetch(BASE + '/inventories/get_count')
		.then((resp) => {
			let json = resp.json() // we want to make sure what we have is just the json part of the response
			return json
		})
}
let getPriceWine = function() {
	return fetch(BASE + '/inventories/get_price_wine')
		.then((resp) => {
			let json = resp.json()
			return json
		})
}
let getPriceBeer = function() {
// the function name getTrolls is i
	return fetch(BASE + '/inventories/get_price_beer')
		.then((resp) => {
			let json = resp.json()
			return json
		})
}

let changeWine = function(change_object) {
// the function name getTrolls is intended to remind you of the restful rails route --> GET '/trolls'.
	var an_object_wine = {
		wine_bottle:change_object
	}

	return fetch(BASE + '/inventories/change_wine',{
		method: 'POST',
		headers: {'Content-Type':'application/json',
					'Accept': 'application/json'},
		body: JSON.stringify(an_object_wine)
	}).then((resp) => {
			return resp
		})
}
let changeBeer = function(change_object) {
	var an_object_beer = {
		beer_bottle:change_object
	}
	return fetch(BASE + '/inventories/change_beer',{
		method: 'POST',
		headers: {'Content-Type':'application/json',
					'Accept': 'application/json'},
		body: JSON.stringify(an_object_beer)
	}).then((resp) => {
			return resp
		})
}

let addBeer = function (change_object) {
	var add_beer = {
		beer_bottle:change_object
	}
	return fetch(BASE +'/inventories/add_beer',{
		method: 'POST',
		headers: {'Content-Type':'application/json',
					'Accept': 'application/json'},
		body: JSON.stringify(add_beer)
	}).then((resp) => {
		return resp
	})
}
let addWine = function (change_object) {
	var add_wine = {
		wine_bottle:change_object
	}
	return fetch(BASE +'/inventories/add_wine',{
		method: 'POST',
		headers: {'Content-Type':'application/json',
					'Accept': 'application/json'},
		body: JSON.stringify(add_wine)
	}).then((resp) => {
		return resp
	})
}
let getCatalog = function (catalog_obj) {

	return fetch(BASE +'/inventories/get_catalog')
	.then((resp) => {
		return resp.json()
	})
}
export  {
	getCount,
	changeWine,
	getPriceWine,
	getPriceBeer,
	changeBeer,
	addBeer,
	addWine,
	getCatalog
}
