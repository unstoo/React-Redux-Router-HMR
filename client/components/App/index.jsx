import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
    <div className="input-group">
      <span className="input-group-btn">
        <button className="btn btn-default" type="button">React</button>
      </span>
      <input type="text" 
      className="form-control" 
      placeholder={this.props.state.default}/>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(App)
