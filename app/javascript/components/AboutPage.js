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
 // var spongebob =  '../images/images.png'
class AboutPage extends React.Component {


  render () {
    return (

      <React.Fragment>
          <div>
            <h1>About Us</h1>
            <p>We are a team of front, back, side-to-side, and any-which-way developers. We are UGLY and PROUD! ✌️
            </p>
            <img src="http://pngimg.com/uploads/spongebob/spongebob_PNG12.png" class="w-25 p-3" />
          </div>
      </React.Fragment>
    );
  }
}

export default AboutPage
