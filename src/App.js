import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyList from "./components/List";
import Header from './components/Header';
import Footer from './components/Footer';
import Map from "./components/Map";
import Event from './components/Event';
import Login from './components/Login';
import Register from './components/Register';
import AddPlace from './components/AddPlace';
import AddEvent from './components/AddEvent';
import About from './components/About';
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

  checkAuth = () => {
    fetch('http://130.193.38.210/api/auth/Info', {
      method: 'GET'
    }).then(res => {
      console.log('был ли выполнен вход: ', this.state.logged, 'выполнен ли теперь', res.ok)
      if(res.ok && res.ok !== this.state.logged) {
        console.log('смена')
        this.setState({logged: res.ok});
      }
    })
  }

  changeHeaderState = val => {
    if(val === this.state.hideHeader) {
      return;
    }
    this.setState({hideHeader: val})
  }

  componentWillMount() {
    this.checkAuth();
  }

  render() {
    return (
      <div className="page" >
        <Router>
          <Header isLogged={this.state.logged} isHidden={this.state.hideHeader} location/>
          <div className="content">
            <Switch>
              <Route path="/" exact component={() => <MyList checkAuth={this.checkAuth} hideHeader={this.changeHeaderState} />} />
              <Route path="/map" component={() => <Map checkAuth={this.checkAuth} hideHeader={this.changeHeaderState} />} />
              <Route path="/add_place" component={() => <AddPlace hideHeader={this.changeHeaderState} checkLogin={this.checkAuth} isLogged={this.state.logged} location/>} />
              <Route path="/add_event" component={() => <AddEvent hideHeader={this.changeHeaderState} checkLogin={this.checkAuth} isLogged={this.state.logged} location/>} />
              <Route path="/event/" component={() => <Event  hideHeader={this.changeHeaderState} checkAuth={this.checkAuth} location/>} />
              <Route path="/login" component={() => <Login hideHeader={this.changeHeaderState} checkLogin={this.checkAuth} isLogged={this.state.logged} location/>} />
              <Route path="/register" component={() => <Register hideHeader={this.changeHeaderState} checkLogin={this.checkAuth} isLogged={this.state.logged} location /> } />
              <Route path="/about" exact component={() => <About checkAuth={this.checkAuth} hideHeader={this.changeHeaderState} />} />
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
