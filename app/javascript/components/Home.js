import React from "react"
import PropTypes from "prop-types"
import drinks from './drinks.jpg'


class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
      <div className='home-container'>
        <div className="landing-bg">
            <h2 className="landing-text">An affordable alternative for liquid inventory</h2>
        </div>
        <div>
            <img src={drinks} alt={"drinks"} className='drinks' />
        </div>
      </div>



      </React.Fragment>
    );
  }
}

export default Home
