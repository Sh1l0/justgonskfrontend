import React, { Component } from 'react';
//import AppRouter from './components/router.js';
import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="page">
        <Header />
        <List />
        <Footer />
      </div>
    );
  }
}

export default App;
