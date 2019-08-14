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
  import {getCount} from '../API_calls/index'
  import {changeWine, getPriceWine,getPriceBeer, changeBeer} from '../API_calls/index'

class InventoryTable extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            stock: {
                beer_stock:"",
                wine_stock:""
            },
            on_hand:{
                beer_count:"",
                wine_count:""
            },
            hidden_hand:{
                beer_hide:"",
                wine_hide:""
            },
            empty:{
                beer_empty:"",
                wine_empty:""
            },
            discrepancy:{
                beer_disc:"",
                wine_disc:""
            }
        }
    }

    handleChange = (e) => {
        const{ hidden_hand } = this.state
        hidden_hand[e.target.name] = e.target.value
        this.setState({
            hidden_hand
        })
    }

    handleClick = ()=> {
        const { on_hand, hidden_hand } = this.state
        this.setState({
            on_hand:{
                beer_count:hidden_hand.beer_hide,
                wine_count:hidden_hand.wine_hide
            }
        })
        console.log(on_hand);
        console.log(hidden_hand);
    }
    componentDidMount (){
    	let {beer_stock, wine_stock} = this.state.stock
    	getCount()
    		.then(APIcount => {
    			beer_stock =APIcount.counts[0].quantity
    			wine_stock =APIcount.counts[1].quantity
    			this.setState({
                    stock:{
    				beer_stock,
    				wine_stock
        			},
                    on_hand:{
                        beer_count:beer_stock,
                        wine_count:wine_stock
                    },
    			})
    		})

    }
  render () {
      const{ beer_count,wine_count} = this.state.on_hand
      const{ beer_stock,wine_stock} = this.state.stock
      var exp_emp_beer = 100 - beer_stock
      var exp_emp_wine = 100 - wine_stock
      var act_emp_beer = 100 - beer_count
      var act_emp_wine = 100 - wine_count
      var disc_beer    =  act_emp_beer - exp_emp_beer
      var disc_wine    =  act_emp_wine - exp_emp_wine
    return (
      <React.Fragment>

        <div className='inventory-table mt-5'>
        <Table className="table table-hover table-bordered">
           <thead className='inventory-top-row'>
               <tr>
               <th className='font-weight-bold'>Inventory:</th>
               <th className='font-weight-bold'>Expected Empty</th>
               <th className='font-weight-bold'>Actual Empty</th>
               <th className='font-weight-bold'>Discrepancy</th>
               <th className='font-weight-bold'>Expected Stock</th>
               <th className='font-weight-bold'>On Hand</th>
               </tr>
           </thead>
           <tbody>
               <tr>
               </tr>
               <tr>
                   <th className='text-dark'>Beer</th>
                   <th>{exp_emp_beer}</th>
                   <th>{act_emp_beer}</th>
                   <th>{disc_beer}</th>
                   <th>{beer_stock}</th>
                   <th>{beer_count}</th>
               </tr>
               <tr>
                   <th className='text-dark'>Wine</th>
                   <th>{exp_emp_wine}</th>
                   <th>{act_emp_wine}</th>
                   <th>{disc_wine}</th>
                   <th>{wine_stock}</th>
                   <th>{wine_count}</th>
               </tr>
           </tbody>
        </Table>
        </div>
        <div id='inventory-form' className='border p-3'>
            <form >
                <div className="form-group">
                    <label className='font-weight-bold text-dark'>Beer: </label>
                    <input type="number" id='on-hand' className="form-control" placeholder="Beer On-Hand" name="beer_hide"
                    onChange ={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label className='font-weight-bold text-dark'>Wine: </label>
                    <input type="number" id='on-hand' className="form-control"  placeholder="Wine On-Hand" name="wine_hide"
                    onChange ={this.handleChange}
                    />
                </div>
                <button type="button" id='submit-button' className="btn btn-dark" onClick={this.handleClick}>Submit</button>
            </form>
        </div>
      </React.Fragment>
    );
  }
}

export default InventoryTable
