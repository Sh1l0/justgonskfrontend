import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Header</Link>
              </li>
              <li>
                <Link to="/page2/">Page2</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact component={Header} />
            <Route path="/page2" component={Page2} />
          </Switch>
        </div>
      </Router>
    );
  }

}
