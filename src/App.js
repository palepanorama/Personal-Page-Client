import React, {useState} from 'react';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';
import Nav from './components/Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (

    <Router>
      <Nav />
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route component={ErrorPage}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
