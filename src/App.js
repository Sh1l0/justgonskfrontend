import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyList from "./components/List";
import Header from './components/Header';
import Map from "./components/Map";
import Event from './components/Event';
import Login from './components/Login';
import AddPlace from './components/AddPlace';
import AddEvent from './components/AddEvent';
import './App.css';
import 'react-leaflet-markercluster/dist/styles.min.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      logged: false,
      hideHeader: false,
    };
  }


  checkAuth = () => {};

  changeHeaderState = val => {
    if(val === this.state.hideHeader) {
      return;
    }
    this.setState({hideHeader: val})
  }

  componentWillMount() {
  }

  render() {
    return (
      <div className="page" >
        <Router>
          <Header isLogged={this.state.logged} isHidden={this.state.hideHeader} location/>
          <div className="content">
            <Switch>
              <Route path="/list"  component={() => <MyList checkAuth={this.checkAuth} hideHeader={this.changeHeaderState} />} />
              <Route path="/" exact component={() => <Map checkAuth={this.checkAuth} hideHeader={this.changeHeaderState} />} />
              <Route path="/add_place" component={() => <AddPlace hideHeader={this.changeHeaderState} checkLogin={this.checkAuth} isLogged={this.state.logged} location/>} />
              <Route path="/add_event" component={() => <AddEvent hideHeader={this.changeHeaderState} checkLogin={this.checkAuth} isLogged={this.state.logged} location/>} />
              <Route path="/event/" component={() => <Event  hideHeader={this.changeHeaderState} checkAuth={this.checkAuth} location/>} />
              <Route path="/login" component={() => <Login hideHeader={this.changeHeaderState} checkLogin={this.checkAuth} isLogged={this.state.logged} location/>} />
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
