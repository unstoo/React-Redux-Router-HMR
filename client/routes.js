import {  Route,  Link } from 'react-router-dom'
import React, { Component } from 'react'

import App from './components/App'
import About from './components/About'

class Routes extends Component {
  render() {
    return (
      <div> 
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>          
        <hr/>
        <Route exact path='/' component={App} />
        <Route path='/about' component={About} />
      </div>
    )
  }
}


export default Routes