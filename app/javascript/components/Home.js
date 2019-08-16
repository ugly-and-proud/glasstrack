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


      </React.Fragment>
    );
  }
}

export default Home
