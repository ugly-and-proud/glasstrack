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
          <div className="w-75 p-3 mx-auto">
              <br/><br/><br/>
              <h2 className="display-3">About Us</h2>
              <br/>
              <p className="lead">We are a team of front, back, side-to-side, and any-which-way developers. We are UGLY and PROUD! ✌️</p>
              <img src="http://pngimg.com/uploads/spongebob/spongebob_PNG12.png" className="w-25 p-3" />
              <br/>
              <hr className="my-4" />
              <br/>
              <p className='text-bold'>Created By:</p>
              <div className='about-card-container'>
                  <div className="about-card card mb-3">
                    <h3 className="card-header" align = "center">Lior Kaufman</h3>
                    <div className="card-body" align = "center">
                      <img className="lior" />
                      <br />
                      <h6 className="card-subtitle text-muted">Full Stack Developer</h6>
                    </div>
                    <div className="card-body">
                      <a href="https://github.com/LiorKaufman" className="card-link" target="_blank">Github</a>
                      <a href="https://www.linkedin.com/in/lior-kaufman/" className="card-link" target="_blank">LinkedIn</a>
                    </div>
                  </div>
                  <div className="about-card card mb-3">
                    <h3 className="card-header" align = "center">Chris McCarthy</h3>
                    <div className="card-body" align = "center">
                      <img className="chris" />
                      <br />
                      <h6 className="card-subtitle text-muted">Full Stack Developer</h6>
                    </div>
                    <div className="card-body">
                      <a href="https://github.com/chrismccarthy13" className="card-link" target="_blank">Github</a>
                      <a href="https://www.linkedin.com/in/chrism1313/" className="card-link" target="_blank">LinkedIn</a>
                    </div>
                  </div>
                  <div className="about-card card mb-3">
                    <h3 className="card-header" align = "center">Jessa Garcia</h3>
                    <div className="card-body" align = "center">
                      <img className="jessa" />
                      <br />
                      <h6 className="card-subtitle text-muted">Full Stack Developer</h6>
                    </div>
                    <div className="card-body">
                      <a href="https://github.com/jmg3156" className="card-link" target="_blank">Github</a>
                      <a href="https://www.linkedin.com/in/jessagarcia/" className="card-link" target="_blank">LinkedIn</a>
                    </div>
                  </div>
                  <div className="about-card card mb-3">
                    <h3 className="card-header" align = "center">Jonathan Cruz</h3>
                    <div className="card-body" align = "center">
                      <img className="jonathan" />
                      <br />
                      <h6 className="card-subtitle text-muted">Full Stack Developer</h6>
                    </div>
                    <div className="card-body">
                      <a href="https://github.com/jonatansamuel" className="card-link" target="_blank">Github</a>
                      <a href="https://www.linkedin.com/in/jonasamuel/" className="card-link" target="_blank">LinkedIn</a>
                    </div>
                  </div>
                  <div class="about-card card mb-3">
                    <h3 class="card-header" align = "center">Rachael Stanislaw</h3>
                    <div class="card-body" align = "center">
                      <img className="rachael" />
                      <br />
                      <h6 class="card-subtitle text-muted">Full Stack Developer</h6>
                    </div>
                    <div class="card-body">
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
