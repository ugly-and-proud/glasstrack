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
// <img src="http://pngimg.com/uploads/spongebob/spongebob_PNG12.png" className="w-25 p-3" />


class AboutPage extends React.Component {
  render () {
    return (

      <React.Fragment>
          <div className="mx-auto">
            <div className='w-75 mx-auto mt-5'>
              <h2 className="display-3">About Us</h2>
              <p className="lead mb-5">We are a team of front, back, side-to-side, and any-which-way developers. We are UGLY and PROUD! ✌️</p>
              <hr className="my-4" />
              <br/>
              <h3 className='text-bold w-75 mb-5'>Created By:</h3>
            </div>
              <div className='about-card-container'>
                  <div className="about-card card mb-5">
                    <h3 className="about-card-header" align = "center">Lior Kaufman</h3>
                    <div className="portfolio-pic" align = "center">
                      <img className="lior" />
                    </div>
                    <div className="card-body-link">
                      <a href="https://github.com/LiorKaufman" className="card-link" target="_blank">Github</a>
                      <a href="https://www.linkedin.com/in/lior-kaufman/" className="card-link" target="_blank">LinkedIn</a>
                    </div>
                  </div>
                  <div className="about-card card mb-5">
                    <h3 className="about-card-header" align = "center">Chris McCarthy</h3>
                    <div className="portfolio-pic" align = "center">
                      <img className="chris" />
                    </div>
                    <div className="card-body-link">
                      <a href="https://github.com/chrismccarthy13" className="card-link" target="_blank">Github</a>
                      <a href="https://www.linkedin.com/in/chrism1313/" className="card-link" target="_blank">LinkedIn</a>
                    </div>
                  </div>
                  <div className="about-card card mb-5">
                    <h3 className="about-card-header" align = "center">Jessa Garcia</h3>
                    <div className="portfolio-pic" align = "center">
                      <img className="jessa" />
                    </div>
                    <div className="card-body-link">
                      <a href="https://github.com/jmg3156" className="card-link" target="_blank">Github</a>
                      <a href="https://www.linkedin.com/in/jessagarcia/" className="card-link" target="_blank">LinkedIn</a>
                    </div>
                  </div>
                  <div className="about-card card mb-5">
                    <h3 className="about-card-header" align = "center">Jonatan Cruz</h3>
                    <div className="portfolio-pic" align = "center">
                      <img className="jonatan" />
                    </div>
                    <div className="card-body-link">
                      <a href="https://github.com/jonatansamuel" className="card-link" target="_blank">Github</a>
                      <a href="https://www.linkedin.com/in/jonasamuel/" className="card-link" target="_blank">LinkedIn</a>
                    </div>
                  </div>
                  <div className="about-card card mb-5">
                    <h3 className="about-card-header" align = "center">Rachael Stanislaw</h3>
                    <div className="portfolio-pic" align = "center">
                      <img className="rachael" />
                    </div>
                    <div className="card-body-link">
                      <a href="https://github.com/rachaelstanislaw" className="card-link" target="_blank">Github</a>
                      <a href="https://www.linkedin.com/in/rachaelstanislaw/" className="card-link" target="_blank">LinkedIn</a>
                    </div>
                  </div>
              </div>
          </div>
      </React.Fragment>
    );
  }
}

export default AboutPage
