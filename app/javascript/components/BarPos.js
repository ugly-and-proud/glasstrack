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
import {changeWine, getPrice, changeBeer} from '../API_calls/index'
class BarPos extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        beer_glass:0,
        wine_glass:0,
        beer_bottle:2,
        wine_bottle:0,
        wine_price: 0,
        beer_price:0,
    }
  }

  handleClickBeer = () =>{
      let {beer_glass} = this.state
      this.setState({beer_glass:beer_glass + 1})

  }

  handleClickWine = () =>{
      let {wine_glass} = this.state
      this.setState({wine_glass:wine_glass + 1})
  }

  handleSubmit = () => {
      changeBeer(this.state.beer_bottle)
  }
  componentDidMount (){
      let {beer_price, wine_price} = this.state
      getPrice()
          .then(APIcount => {
              console.log(APIcount.object.item_variation_data.price_money.amount);
              beer_price =APIcount.object.item_variation_data.price_money.amount
              wine_price =APIcount.object.item_variation_data.price_money.amount
              this.setState({
                  beer_price:beer_price,
                  wine_price:wine_price
              })
          })

  }

  render () {
      const {beer_glass,wine_glass,beer_bottle,wine_bottle, beer_price, wine_price} = this.state
    return (
      <React.Fragment>
      <div>
        <h4 className="d-flex flex-row justify-content-center mt-5">Bartender name goes here:</h4>
        <br></br>
        <div className="d-flex mx-auto">
            <div id='buttons-container' className="button-container align-content-left mt-5">
                 <Button id="pos-button" data-toggle='button' className="btn btn-lg btn-block mb-3 active"
                 onClick={this.handleClickBeer}
                 >Beer</Button>
                 <br></br>
                 <Button id="pos-button" data-toggle='button' className="btn btn-lg btn-block mb-3 active"
                 onClick={this.handleClickWine}
                 >Wine</Button>
             </div>
             <div className='Bill-container align-content-right w-50 mx-auto'>
             <Table className="pos-table table table-hover">
                <thead>
                    <tr>
                    <th scope="col" className='font-weight-bold text-dark'>Drink:</th>
                    <th scope="col" className='font-weight-bold text-dark'>Amount:</th>
                    </tr>
                </thead>
                <tbody className="table-light">
                    <tr>
                        <th className='font-weight-bold text-dark'>Beer</th>
                        <th>{beer_glass}</th>
                    </tr>
                    <tr>
                        <th className='font-weight-bold text-dark'>Wine</th>
                        <th>{wine_glass}</th>
                    </tr>
                    <tr>
                        <th className='font-weight-bold text-dark'>Total price</th>
                        <th className='font-weight-bold text-dark'>${(beer_price * beer_glass) + (wine_price * wine_glass)}</th>
                    </tr>
                </tbody>
             </Table>
             <Form className='align-content-right'>
                <Button id='submit-button' className="btn btn-dark" onClick={this.handleSubmit}>Submit</Button>
             </Form>
             </div>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default BarPos
