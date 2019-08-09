import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import { Nav,
     NavItem,
     NavLink,
     Button,
     Table,
     Form
  } from 'reactstrap'
import { getCount } from '../API_calls/index'

class InventoryTable extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            stock:{
                beer_stock:'',
                wine_stock:''
            }
        }
    }

    componentDidMount (){
        console.log("Runing a test");
        let {beer_stock, wine_stock} = this.state.stock
        getCount()
            .then(APIcount => {
                console.log(APIcount);
                beer_stock =APIcount.counts[0].quantity
                console.log(beer_stock);
                wine_stock =APIcount.counts[1].quantity
                console.log(wine_stock);
                this.setState({stock:{
                    beer_stock,
                    wine_stock
                }
                })
            })
            console.log(this.state.stock.beer_stock);
            console.log(this.state.stock.wine_stock);
    }

  render () {
    return (
      <React.Fragment>
        <div>
        <Table>
           <thead>
               <tr>
               <th>Inventory:</th>
               <th>Empty accoridng to bar</th>
               <th>Empty bottles</th>
               <th>Discrepancy</th>
               <th>In stock</th>
               </tr>
           </thead>
           <tbody>
               <tr>
               </tr>
               <tr>
                   <th>Beer</th>
                   <th></th>
                   <th></th>
                   <th></th>
                   <th>{this.state.stock.beer_stock}</th>
               </tr>
               <tr>
                   <th>Wine</th>
                   <th></th>
                   <th></th>
                   <th></th>
                   <th>{this.state.stock.wine_stock}</th>
               </tr>
           </tbody>
        </Table>
        </div>
      </React.Fragment>
    );
  }
}

export default InventoryTable
