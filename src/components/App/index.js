import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import dayjs from 'dayjs'
import 'dayjs/locale/es'

import './app.css'

import Home from '../../Pages/Home'
import Nav from '../Nav'
import Category from '../../Pages/Category'

dayjs.locale('es')

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
