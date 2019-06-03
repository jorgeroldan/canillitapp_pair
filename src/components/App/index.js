import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './app.css'

import Home from '../../Pages/Home'
import Nav from '../Nav'
import Category from '../../Pages/Category'

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/category/:slug" component={Category} />
            </Switch>
      </Router>
  )}
}

export default App;
