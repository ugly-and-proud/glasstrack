import React from "react"
import PropTypes from "prop-types"
import { Nav, NavItem, NavLink, Button } from 'reactstrap'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import BarPos from './BarPos'
import InventoryTable from './InventoryTable'

class MainApp extends React.Component {
  render () {
    return (
      <React.Fragment>
      <Router>
      <div>
      <h2> Home Page </h2>
      <Link to='/barpos'> BarPos </Link>
      <Link to='/inventory'> Inventory </Link>
      </div>
      <Route exact path = '/barpos/'
      render={(props) => <BarPos
          beer_glass={this.props.beer_glass}
          wine_glass={this.props.wine_glass}
          beer_bottle={this.props.beer_bottle}
          wine_bottle={this.props.wine_bottle}
          />}/>
      <Route exact path='/inventory' component={InventoryTable}/>
      </Router>

      </React.Fragment>
    );
  }
}

export default MainApp
