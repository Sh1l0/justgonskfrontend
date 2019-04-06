import React, { Component } from 'react';

export default class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <div className="big">Название события</div>
        <div className="small">24.03.2001</div>
        <div className="madium">Lorem ipsum dolor sit amet,
         consectetur adipisicing elit. Obcaecati li laboriosam
         in tempora dolorum itaque sequi rerum! Fugiat voluptatibus
          at aliquid.</div>

      </div>
    )
  }
}
