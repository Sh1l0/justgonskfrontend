import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyList from "./components/List";
import Header from './components/Header';
import Footer from './components/Footer';
import Map from "./components/Map";
import Event from './components/Event';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="page" >
        <Router>
          <Header />
          <div className="content">
            <Switch>
              <Route path="/" exact component={MyList} />
              <Route path="/map" component={Map} />
              <Route path="/event/" component={Event} />
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
