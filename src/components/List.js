import React, { Component } from 'react';
import Card from './Card';

export default class List extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="content">
      <Card />
      <Card />
      <Card />
      </div>
    )
  }
}
