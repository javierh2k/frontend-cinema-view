import React, { Component } from 'react';
import { Route, Router } from 'react-router';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Detail from './components/Detail';


class App extends Component {

  render() {
    return (
      <Router history = { this.props.history }>
        <div class="app" id="site-content">
          <Header />
          <Route exact path='/' component={Home}/>
          <Route exact path='/detail/:id' component={Detail}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
