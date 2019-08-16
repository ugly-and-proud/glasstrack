import React from "react"
import PropTypes from "prop-types"
import calc from '../assets/calc.png'
import inventory from '../assets/inventory.png'
import staff from '../assets/staff.png'
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
      <section className="content-section text-center">
          <div className="container">
              <div className="content-section-heading mb-5 mt-5">
                  <h2 className="display-4" align = "center">What We Offer</h2>
              </div>
              <div className="row d-flex justify-content-around">
                  <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                      <span className="service-icon rounded-circle mx-auto mb-3">
                      <img src={calc} alt={"calc"} className='calc'  />
                      </span>
                      <h4>
                      <strong className="offer-titles">POS<br/>System</strong>
                      </h4>
                      <div className="offer-text-field">
                        <p className="offer-text text-faded mb-0">Easy to understand, minimalist point of sale</p>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                      <span className="service-icon rounded-circle mx-auto mb-3">
                       <img src={inventory} alt={"inventory"} className='inventory'  />
                      </span>
                      <h4>
                      <strong className="offer-titles">Inventory Management</strong>
                      </h4>
                      <div className="offer-text-field">
                        <p className="offer-text text-faded mb-0">Tracks your expected inventory and reports discrepancies</p>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                      <span className="service-icon rounded-circle mx-auto mb-3">
                       <img src={staff} alt={"staff"} className='staff'  />
                      </span>
                      <h4>
                      <strong className="offer-titles">Staff Correspondence</strong>
                      </h4>
                      <div className="offer-text-field">
                        <p className="offer-text text-faded mb-0">In-app messaging provides accountability by logging staff communication</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

          <div className="mx-auto">
            <div className='w-75 mx-auto mt-5'>
              <hr className="my-4" />
              <br/>
              <h3 className="display-4" align = "center">About Us</h3>
              <p className="lead mb-5" align = "center">We are a team of front, back, side-to-side, and any-which-way developers. We are UGLY and PROUD! ✌️</p>
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
