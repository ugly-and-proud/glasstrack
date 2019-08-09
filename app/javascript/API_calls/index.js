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

// componentDidMount (){
// 	console.log("Runing a test");
// 	let {beer_stock, wine_stock} = this.state.stock
// 	getCount()
// 		.then(APIcount => {
// 			console.log(APIcount);
// 			beer_stock =APIcount.counts[0].quantity
// 			console.log(beer_stock);
// 			wine_stock =APIcount.counts[1].quantity
// 			console.log(wine_stock);
// 			this.setState({stock:{
// 				beer_stock,
// 				wine_stock
// 			}
// 			})
// 		})
// 		console.log(this.state.stock.beer_stock);
// 		console.log(this.state.stock.wine_stock);
// }
export  {
	getCount
}
