import React, { Component } from 'react';
import BottomSheet from './BottomSheet';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import {Map, TileLayer, Circle, Popup} from 'react-leaflet';
import { getRangeQuery, getDate, toggleClassName } from './utils';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';

export default class MapPage extends Component {
  constructor() {
    super()
    this.state = {
      position: [55.03136920000018, 82.92307489999976],
      request: false,
      zoom: 14
    }
  }

  parseUrl = () => {
    let url = document.URL.split('?');
    if(url.length === 1) {
      return;
    }
    let params = url.pop();
    if(params[params.length - 1] === '/') {
      params = params.slice(0, -1);
    }
    let coords = params.split('&');
    coords = coords.map((val, ind) => val.split('=').pop());
    console.log(coords);
    this.setState({position: coords, zoom: 17});
  }

  bindMap = (el) => {
    if(!el) return;
    this.map = el.leafletElement;
  }

  zoomIn = () => {
    this.map.zoomIn();
    this.setState({zoom: this.state.zoom + 1});
  }

  zoomOut = () => {
    this.map.zoomOut();
    this.setState({zoom: this.state.zoom - 1});
  }

  showInfo = (val) => {
    const infoBlock = this.refs.info;
    if(!infoBlock.classList.contains('show')) {
      infoBlock.classList.add('show');
    }
    console.log(val)
    this.setState({info: val})

  }

  componentDidMount() {

    this.parseUrl();
    let url = this.props.url;
    if(url) {
      url = '?categories=' + url;
    }
    else {
      url = '';
    }
    fetch(`${process.env.REACT_APP_URL}/api/Events${url}?${getRangeQuery()}`,{//public-api/v1.4/events/?lang=ru&fields=dates,short_title,images,title,description,id&expand=dates&location=nsk&actual_since=1444385206&actual_until=1644385405&is_free=true`, { //https://justgonskapitest.azurewebsites.net    ${process.env.REACT_APP_URL}/api/Test
      mode: 'cors'
    }).then(res => {
      return res.json()
    }).then(val => {
      let list = val.results;
      this.setState({list: list});
    });
  }

  render() {
    window.scroll(0, 0);
    document.documentElement.classList.add('no-scroll');
    return (
      <div>
      <Map
        center={this.state.position}
        onClick={() => {
          if(
            (!window.event.target.classList.contains('no-click')) &&
            (this.refs.info.classList.contains('show'))
          ) {
              this.refs.info.classList.remove('show');
              if(this.refs.info.classList.contains('map__info-full')) {
                this.refs.info.classList.remove('map__info-full');
              }
          }
        }}
        zoomControl={false}
        zoom={this.state.zoom}
        id='map'
        ref={this.bindMap}
      >
        <TileLayer
          minZoom={12}
          maxZoom={19}
          url="http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <div className='map__control'>
          <button className='map__button no-click' onClick={this.zoomIn} >+</button>
          <button className='map__button no-click' onClick={this.zoomOut} >-</button>
        </div>
        {
          this.state.list &&
          this.state.list.map((val, ind) => {
            return (
              <Circle
                className='map__circle no-click'
                key={ind}
                center={[val.place.coords.lat, val.place.coords.lon]}
                radius={50}
                color='#3f51b5'
                onClick={() => {this.showInfo(val)}}
              >

              </Circle>

            )
          })
        }
      </Map>
      <div className='map__event-info no-click' ref='info'>
        {
          this.state.info &&
          <div className='no-click map__event-content'>
            <Fab color="primary" className='no-click hidden' onClick={() => {
              this.refs.info.classList.toggle('map__info-full');
              if(this.refs.info.classList.contains('map__info-full')) {
                this.refs.arrow.style = 'transform: rotate(180deg)';
              }
              else {
                this.refs.arrow.style = '';
              }
            }}>
              <div ref='arrow' className='no-click'>
                <KeyboardArrowUp className='no-click'/>
              </div>
            </Fab>
            <h2 className='map__event-title no-click'>{this.state.info.title.toUpperCase()}</h2>
            <img className='map__event-img no-click' src={this.state.info.images[0].image} alt=""/>
            <p className='map__event-description no-click'>{this.state.info.description.replace(/<.*?>/g, ' ')}</p>
            <div className='map__event-additional no-click'>{getDate(this.state.info)}</div>
            <p className='map__event-additional no-click'>{this.state.info.place.address}</p>

            <Link to={`/event/${this.state.info.id}?back_url=map`} className='no-style no-click'>
              <Button size="medium" color="primary" variant='contained' fullWidth={true}>
                Открыть полностью
              </Button>
            </Link>
          </div>
        }
      </div>
      </div>
    )
  }
}
