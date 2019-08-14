import React from "react"
import PropTypes from "prop-types"
import { Nav, NavItem, NavLink, Button } from 'reactstrap'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import BarPos from './BarPos'
import Home from './Home'
import InventoryTable from './InventoryTable'
import AboutPage from './AboutPage'
import LogIn from './LogIn'
import logo from './logo.png'
 import {changeWine, getPriceWine,getPriceBeer, changeBeer} from '../API_calls/index'
class MainApp extends React.Component {
    constructor(props){
      super(props)
      this.state = {
          beer_glass:0,
          wine_glass:0,
          beer_glass_leftover:0,
          wine_glass_leftover:0,
          beer_bottle:0,
          wine_bottle:0,
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
    sendOrder = () => {
        let {wine_glass,wine_glass_leftover} = this.state
        let {beer_glass,beer_glass_leftover} = this.state
        let {beer_bottle,wine_bottle} = this.state

        if (wine_glass_leftover !== 0) {
            wine_glass = wine_glass + wine_glass_leftover
            wine_glass_leftover = 0
        }
        if (wine_glass < 4 && wine_glass_leftover === 0) {
            console.log("entered the second if");
            wine_glass_leftover = wine_glass
            wine_glass = 0
            wine_bottle = 0
        }
        if (wine_glass >= 4 && wine_glass_leftover === 0 && wine_bottle === 0) {
            wine_glass_leftover = wine_glass % 4
            wine_bottle = Math.floor(wine_glass/4)
            wine_glass = 0
        }
        if (beer_glass_leftover !== 0) {
            beer_glass = beer_glass + beer_glass_leftover
            beer_glass_leftover = 0
        }
        if (beer_glass < 4 && beer_glass_leftover === 0) {
            beer_glass_leftover = beer_glass
            beer_glass = 0
            beer_bottle = 0
        }
        if (beer_glass >= 4 && beer_glass_leftover === 0 && beer_bottle === 0) {
            beer_glass_leftover = beer_glass % 4
            beer_bottle = Math.floor(beer_glass/4)
            beer_glass = 0
        }
        this.setState({
            beer_glass,
            beer_glass_leftover,
            wine_glass,
            wine_glass_leftover,
            wine_bottle,
            beer_bottle
        })
    }

    componentDidUpdate (){
        const {beer_bottle, wine_bottle} = this.state
        changeBeer(beer_bottle)
        changeWine(wine_bottle)
    }

  render ()
   {
       const {
         logged_in,
         sign_in_route,
         sign_out_route,
         logged_in_as,
         new_bartender
       } = this.props
    return (
      <React.Fragment>


      <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link
          to='/'
          className="navbar-brand">
              <img src={logo}
              alt={"logo"}
              className='logo'
              />
          </Link>
          <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarColor02"
              aria-controls="navbarColor02"
              aria-expanded="false"
              aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse flex-grow-1 text-right" id="navbarColor03">
              {logged_in &&
                  <ul id='nav' className="navbar-nav ml-auto flex-nowrap">
                      <li className="nav-item active">
                        <Link to='/'> Home </Link>
                      </li>
                      <li className="nav-item active">
                            <Link to='/barpos'> POS </Link>
                      </li>
                      {logged_in_as  &&
                          <li className="nav-item active">
                            <Link to='/inventory'> Inventory </Link>
                          </li>
                        }

                      <li className="nav-item active">
                            <Link to='/about'> About Us </Link>
                      </li>
                      <li className="nav-item active">
                            <NavLink href={sign_out_route}> Sign Out </NavLink>
                      </li>
                  </ul>
                }
                  {!logged_in &&
                      <ul id='nav' className="navbar-nav ml-auto flex-nowrap">
                          <li className="nav-item active">
                            <Link to='/'> Home </Link>
                          </li>
                          <li className="nav-item active">
                            <NavLink href={sign_in_route}> Sign In </NavLink>
                          </li>
                  </ul>
                    }
          </div>
         </nav>
      </div>
      <Route exact path = '/barpos/'
      render={(props) => <BarPos
          beer_glass={this.state.beer_glass}
          wine_glass={this.state.wine_glass}
          beer_bottle= {this.state.beer_bottle}
          wine_bottle= {this.state.wine_bottle}
          changeBeerGlass ={this.handleClickBeer}
          changeWineGlass ={this.handleClickWine}
          sendOrder = {this.sendOrder}
          />}/>
      <Route exact path='/inventory' component={InventoryTable}/>
      <Route exact path='/about' component={AboutPage}/>
      <Route exact path='/login' component={LogIn}/>
      <Route exact path='/' component={Home}/>
      <Route exact path={sign_out_route}/>
      <Route exact path={sign_in_route}/>
      </Router>

      </React.Fragment>
    );
  }
}

export default MainApp
