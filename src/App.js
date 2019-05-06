import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyList from "./components/List";
import Header from './components/Header';
import Footer from './components/Footer';
import Map from "./components/Map";
import Event from './components/Event';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      flags: {
        ball: false,
        'business-events': false,
        cinema: false,
        circus: false,
        'comedy-club': false,
        concert: false,
        'dance-trainings': false,
        discount: false,
        education: false,
        evening: false,
        exhibition: false,
        fashion: false,
        festival: false,
        flashmob: false,
        games: false,
        global: false,
        holiday: false,
        kids: false,
        kvn: false,
        magic: false,
        masquerade: false,
        meeting: false,
        night: false,
        open: false,
        other: false,
        party: false,
        'permanent-exhibitions': false,
        photo: false,
        presentation: false,
        quest: false,
        romance: false,
        sale: false,
        shopping: false,
        show: false,
        'social-activity': false,
        'speed-dating': false,
        sport: false,
        'stand-up': false,
        stock: false,
        theater: false,
        tour: false,
        'yarmarki-razvlecheniya-yarmarki': false,
        yoga: false,
      }
    }
  }

  addFlags = (flags) => {
    this.setState({flags: flags});
  }

  flagsToString = () => {
    let flags = '';
    for(let flag in this.state.flags) {
      if(this.state.flags[flag]) {
        flags += flag + ',';

      }
    }

    flags = flags.slice(0, -1);

    return flags;
  }




  checkPage = () => {
    for(let one of document.URL.split('/')) {
      if(one === 'map') {
        return false;
      }
    }
    return true;
  }

  render() {



    return (
      <div className="page" >
        <Router>
          <Header addFlags={this.addFlags} flags={this.state.flags} />
          <div className="content">
            <Switch>
              <Route path="/" exact render={() => <MyList url={this.flagsToString()}/>} />
              <Route path="/map" component={() => <Map url={this.flagsToString()}/>} />
              <Route path="/event/" component={Event} />
            </Switch>
          </div>
        </Router>
        {this.checkPage() && <Footer />}
      </div>
    );
  }
}

export default App;
