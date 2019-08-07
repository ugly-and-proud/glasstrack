import React from "react"
import PropTypes from "prop-types"
import { Nav, NavItem, NavLink, Button } from 'reactstrap'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import BarPos from './BarPos'

class MainApp extends React.Component {
  render () {
    return (
      <React.Fragment>
      <Router>
      <div>
      <h2> Home Page </h2>
      <Link to='/barpos'> BarPos </Link>
      </div>
      <Route exact path='/barpos' component={BarPos}/>
      </Router>
      </React.Fragment>
    );
  }
}

export default MainApp
