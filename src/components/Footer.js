import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="footer">
        <div className="white small">Наша почта</div>
        <a href="mailto:email@mail.mal" className="white medium">email@mail.mal</a>
      </div>
    )
  }
}
