import React from "react"
import PropTypes from "prop-types"
import { Nav, NavItem, NavLink, Button } from 'reactstrap'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import BarPos from './BarPos'
import InventoryTable from './InventoryTable'
import AboutPage from './AboutPage'
import LogIn from './LogIn'
import logo from './logo.png'

class MainApp extends React.Component {
  render ()
   {
       const {
         logged_in,
         sign_in_route,
         sign_out_route
       } = this.props
    return (
      <React.Fragment>


      <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to='/' className="navbar-brand"><img src={logo} alt={"logo"} className='logo' /></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse flex-grow-1 text-right" id="navbarColor03">
              <ul id='nav' className="navbar-nav ml-auto flex-nowrap">
                  <li className="nav-item active">
                  <Link to='/'> Home </Link>
                  </li>
                  <li className="nav-item active">
                  <Link to='/barpos'> POS </Link>
                  </li>
                  <li className="nav-item active">
                   <Link to='/inventory'> Inventory </Link>
                  </li>
                  <li className="nav-item active">
                  <Link to='/about'> About Us </Link>
                  </li>
                  {logged_in &&
                  <li className="nav-item active">
                        <NavLink href={sign_out_route}> Sign Out </NavLink>
                  </li>
                    }
                  {!logged_in &&
                  <li className="nav-item active">
                          <NavLink href={sign_in_route}> Sign In </NavLink>
                  </li>
                    }
              </ul>
          </div>
         </nav>
      </div>
      <Route exact path = '/barpos/'
      render={(props) => <BarPos
          beer_glass={this.props.beer_glass}
          wine_glass={this.props.wine_glass}
          beer_bottle={this.props.beer_bottle}
          wine_bottle={this.props.wine_bottle}
          />}/>
      <Route exact path='/inventory' component={InventoryTable}/>
      <Route exact path='/about' component={AboutPage}/>
      <Route exact path='/login' component={LogIn}/>
      <Route exact path={sign_out_route}/>
      <Route exact path={sign_in_route}/>
      </Router>

      </React.Fragment>
    );
  }
}

export default MainApp
