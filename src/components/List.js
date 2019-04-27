import React, { Component } from 'react';

import MyCard from './Card';



export default class MyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxScroll: 300,
      offset: 0,
      cards: [],
      count: 2
    }
  }



  request = () => {
    let list;
    fetch(`${process.env.REACT_APP_URL}/api/Events?count=${this.state.count}&offset=${this.state.offset}`,{//public-api/v1.4/events/?lang=ru&fields=dates,short_title,images,title,description,id&expand=dates&location=nsk&actual_since=1444385206&actual_until=1644385405&is_free=true`, { //https://justgonskapitest.azurewebsites.net    ${process.env.REACT_APP_URL}/api/Test
      mode: 'cors'
    }).then(res => {
      return res.json()
    }).then(val => {
      list = val.results;

      console.log(list, window.pageYOffset, this.state.maxScroll);
      let cards = list.map((val) => {

        return <MyCard
                  key={Math.random()}
                  id={val.id}
                  src={val.images[0].image}
                  title={val.title.toUpperCase()}
                  date={val.dates[0].start_Date ? val.dates[0].start_Date.replace(/-/g, '.').replace(/T/g, '   '): 'Идёт круглый год'}
                  description={val.description.replace('<p>', '').replace('</p>', '')}
                />
      })

      let newCards = this.state.cards.concat(cards);
      this.setState({cards: newCards, url: this.props.url});
    });
  }

  renderCards = () => {
    if((this.state.offset === 0) && (!this.state.cards.length)) {
      return  <MyCard />
    }
    else if(this.state.cards.length === 0) {
      return <MyCard title='Событий не найдено' />
    }
    else {
      return this.state.cards
    }
  }

  getDate(obj) {
    let date;
    if(obj.current) {
      date = obj.current.start;
    }
    else if(obj.nearest_next) {
      date = obj.nearest_next.start;
    }
    else if(obj.dates[0]) {
      date = obj.dates[0].start;
    }
    else {
      return 'Идёт круглый год'
    }
    return date.replace(/-/g, '.').replace(/T/g, ' ');
  }

  componentWillMount() {
    if(document.body.clientWidth > 840) {
      this.setState({count: 6})
    }
  }

  componentDidMount() {

    window.onscroll = () => {
      if(window.pageYOffset < this.state.maxScroll ) {
        return;
      }
      this.setState({offset: this.state.offset + this.state.count});
      this.request();
      this.setState({maxScroll: this.state.maxScroll + 800});
    };

    let list;
    fetch(`${process.env.REACT_APP_URL}/api/Events?count=${this.state.count}`,{//public-api/v1.4/events/?lang=ru&fields=dates,short_title,images,title,description,id&expand=dates&location=nsk&actual_since=1444385206&actual_until=1644385405&is_free=true`, { //https://justgonskapitest.azurewebsites.net    ${process.env.REACT_APP_URL}/api/Test
      mode: 'cors'
    }).then(res => {
      return res.json()
    }).then(val => {
      list = val.results;
      console.log(list);
      let i = 0;
      let cards = list.map((val) => {
        return <MyCard
                  key={i++}
                  id={val.id}
                  src={val.images[0].image}
                  title={val.title.toUpperCase()}
                  date={this.getDate(val)}
                  description={val.description.replace('<p>', '').replace('</p>', '')}
                />
      })
      this.setState({cards: cards, url: this.props.url});
    });
  }

  render() {

    return (
      <div className="wrapper" >
      {this.renderCards()}
      </div>
    )
  }
}
