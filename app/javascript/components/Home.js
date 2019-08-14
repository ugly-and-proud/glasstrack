import React from "react"
import PropTypes from "prop-types"
import drinks from './drinks.jpg'


class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
      
      <section className="content-section" id="top">
        <div className='home-container'>
          <div className="landing-bg">
              <h2 className="landing-text">An affordable alternative for liquid inventory</h2>
          </div>
          <div>
              <img src={drinks} alt={"drinks"} className='drinks'  />
          </div>
        </div>
      </section>

      </React.Fragment>
    );
  }
}

export default Home

      // <section className="content-section text-center" id="skills">
      //   <div className="container">
      //     <div className="content-section-heading">
      //       <h3 className="text-secondary mb-0 mt-5">Skills</h3>
      //       <h2 className="mb-5">What We Offer</h2>
      //     </div>
      //     <div className="row d-flex justify-content-around">
      //       <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
      //         <span className="service-icon rounded-circle mx-auto mb-3">
      //           Icon
      //         </span>
      //         <h4>
      //           <strong>POS System</strong>
      //         </h4>
      //         <p className="text-faded mb-0">Some text...</p>
      //       </div>
      //       <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
      //         <span className="service-icon rounded-circle mx-auto mb-3">
      //           Icon
      //         </span>
      //         <h4>
      //           <strong>Inventory Management</strong>
      //         </h4>
      //         <p className="text-faded mb-0">Some text...</p>
      //       </div>
      //       <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
      //         <span className="service-icon rounded-circle mx-auto mb-3">
      //           Icon
      //         </span>
      //         <h4>
      //           <strong>Version Control Management</strong>
      //         </h4>
      //         <p className="text-faded mb-0">Some text...</p>
      //       </div>
      //     </div>
      //   </div>
      // </section>


// <div className="container home-icons">
//         <div className="row">
//           <div className="col-lg">
//             One of three columns
//           </div>
//           <div className="col-lg">
//             One of three columns
//           </div>
//           <div className="col-lg">
//             One of three columns
//           </div>
//         </div>
//       </div>