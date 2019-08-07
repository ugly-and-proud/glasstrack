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

class InventoryTable extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div>
        <Table>
           <thead>
               <tr>
               <th>Inventory:</th>
               <th>Empty accoridng to bar</th>
               <th>Empty bottles</th>
               <th>Discrepancy</th>
               <th>In stock</th>
               </tr>
           </thead>
           <tbody>
               <tr>
               </tr>
               <tr>
                   <th>Beer</th>
                   <th></th>
                   <th></th>
                   <th></th>
                   <th></th>
               </tr>
               <tr>
                   <th>Wine</th>
                   <th></th>
                   <th></th>
                   <th></th>
                   <th></th>
               </tr>
           </tbody>
        </Table>
        </div>
      </React.Fragment>
    );
  }
}

export default InventoryTable
