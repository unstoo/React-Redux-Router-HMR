import { AppContainer } from 'react-hot-loader'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import {  BrowserRouter as Router } from 'react-router-dom'

import './css/style.css'
// import App from './components/App' 
// import About from './components/About' 
import reducers from './reducers'
import Routes from './routes'

const createStoreWithMiddleware = applyMiddleware()(createStore)
const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


const render = (Routes) => 
  ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Router> 
        <Routes/>
      </Router>
    </Provider>
  </AppContainer>,
  document.querySelector('.root'))

render(Routes)

if (module.hot) {
  module.hot.accept('./routes', () => {

    const nextRoutes = require('./routes').default
    render(nextRoutes)
  })
}
