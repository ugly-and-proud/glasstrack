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

class BarPos extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        beer_glass:0,
        wine_glass:0,
        beer_bottle:0,
        wine_bottle:0
    }
  }

  handleClickBeer = () =>{

      // If beer_glass % 4 == 0 then substract 1 from the inventory api
      // Create a hidden state reset
      let {beer_glass, beer_bottle} = this.state
      this.setState({beer_glass:beer_glass + 1})
      if (beer_glass === 4) {
          this.setState({beer_bottle:1})
      }
      else if (beer_glass % 4 === 0 && beer_glass > 4) {
          this.setState({beer_bottle: beer_bottle + 1})
      }
  }

  handleClickWine = () =>{
      let {wine_glass, wine_bottle} = this.state
      this.setState({wine_glass:wine_glass + 1})
      if (wine_glass % 4 === 0 && wine_glass !== 0) {
          this.setState({wine_bottle:wine_bottle + 1})
      }
  }

  render () {
      const {beer_glass,wine_glass,beer_bottle,wine_bottle} = this.state
    return (
      <React.Fragment>
      <div>
        <h4>Bar tender name goes here:</h4>
        <div className="button-container">
             <Button color="success"
             onClick={this.handleClickBeer}
             >Beer</Button>
             <Button color="success"
             onClick={this.handleClickWine}
             >Wine</Button>
         </div>
         <div className='Bill-container'>
         <Table>
            <thead>
                <tr>
                <th>Drink:</th>
                <th>Amount:</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Beer</th>
                    <th>{beer_glass}</th>
                </tr>
                <tr>
                    <th>Wine</th>
                    <th>{wine_glass}</th>
                </tr>
                <tr>
                    <th>Total price</th>
                    <th>$12</th>
                </tr>
            </tbody>
         </Table>
         <Form>
            <Button>Submit</Button>
         </Form>
         <h3>{wine_bottle}</h3>
         <h3>{beer_bottle}</h3>
         </div>
      </div>
      </React.Fragment>
    );
  }
}

export default BarPos
