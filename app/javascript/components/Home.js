import React from "react"
import PropTypes from "prop-types"
import drinks from '../assets/drinks.jpg'


class Home extends React.Component {
  render () {
    return (
      <React.Fragment>

      <section className="content-section" id="top">
        <div className='home-container'>
        <div className="landing-bg">
            <h2 className="landing-text">An affordable alternative for liquid inventory</h2>
        </div>
          <div className="shrink cell">
                 <img src={drinks} alt={"drinks"} className='drinks'  />
          </div>
        </div>
      </section>


    <section>
    <footer className="page-footer font-small unique-color-dark pt-5">
      <div className="container" align = "center">
        <ul className="list-unstyled list-inline text-center" align='center'>
          <li className="list-inline-item" align='center'>
            <h5 className="mb-1">Contact Us</h5>
          </li>
          <li className="list-inline-item ml-3" align='center'>
            <a href="mailto:team.ugly.n.proud@gmail.com" className="btn btn-outline-primary btn-rounded" target="_blank">Email</a>
          </li>
        </ul>
        <div className="footer-copyright text-center mt-5">© 2019 Copyright:
          <a href="localhost:3000/"> Glasstrack.com</a>
        </div>
      </div>

    </footer>
    </section>

      </React.Fragment>
    );
  }
}

export default Home
