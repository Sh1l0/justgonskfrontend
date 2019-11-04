import React, { Component } from 'react';
import MyCard from './Card';
import { list } from '../__mocks__/mocks';


export default class MyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxScroll: 200,
      offset: 0,
      cards: [],
      count: 2,
    }
  }

  request = () => {
    new Promise((resolve) => setTimeout(resolve, 500))
        .then(() => {
      let cards = list.map((val) => {
        return <MyCard
                 key={Math.random()}
                 id={val.id}
                 src={val.images[0]}
                 title={val.title.toUpperCase()}
                 date={val.date}
                 description={val.shortDescription}
               />
      });
      let newCards = this.state.cards.concat(cards);
      this.setState({cards: newCards});
    });
  }


  renderCards = () => {
    if((this.state.offset === 0) && (!this.state.cards.length)) {
      return  <MyCard className='loading'/>
    }
    else if(this.state.cards.length === 0) {
      return <MyCard title='Событий не найдено' />
    }
    else {
      return this.state.cards
    }
  }

  componentWillMount() {
    if(document.body.clientWidth > 840) {
      this.setState({count: 7})
    }
  }

  componentWillUnmount() {
    window.onscroll = null;

  }

  componentDidMount() {
    document.documentElement.classList.remove('no-scroll');
    this.props.checkAuth();
    this.request();
  }

  render() {
    this.props.hideHeader(false);
    return (
      <div className="wrapper" >
        {this.renderCards()}
      </div>
    )
  }
}
