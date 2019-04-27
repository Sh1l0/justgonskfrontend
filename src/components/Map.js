import React, { Component } from 'react';
import MyCard from './Card';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import {Map, TileLayer, Circle, Popup, Tooltip} from 'react-leaflet';

export default class MapPage extends Component {
  constructor() {
     super()
     this.state = {
       position: [55.03136920000018, 82.92307489999976],
       request: false,
     }
   }

  bindMap = (el) => {
    if(!el) return;
    this.map = el.leafletElement;
  }

  zoomIn = () => {
    this.map.zoomIn();
  }

  zoomOut = () => {
    this.map.zoomOut();
  }

  componentDidMount() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(pos => {this.setState({position: [pos.coords.latitude, pos.coords.longitude]})});
    }
    let url = this.props.url;
    if(url) {
      url = '?categories=' + url;
    }
    else {
      url = '';
    }
    fetch(`${process.env.REACT_APP_URL}/api/Events${url}`,{//public-api/v1.4/events/?lang=ru&fields=dates,short_title,images,title,description,id&expand=dates&location=nsk&actual_since=1444385206&actual_until=1644385405&is_free=true`, { //https://justgonskapitest.azurewebsites.net    ${process.env.REACT_APP_URL}/api/Test
      mode: 'cors'
    }).then(res => {
      return res.json()
    }).then(val => {
      let list = val.results;
      console.log(list);
      let i = 0;
      this.setState({list: list});
      console.log(this.state.list)
    });
  }

  componentDidUpdate(prevProps) {
    if(prevProps.url === this.props.url) {
      return;
    }
    let url = this.props.url;
    if(url) {
      url = '?categories=' + url;
    }
    else {
      url = '';
    }
    let list;
    fetch(`${process.env.REACT_APP_URL}/api/Events${url}`,{//public-api/v1.4/events/?lang=ru&fields=dates,short_title,images,title,description,id&expand=dates&location=nsk&actual_since=1444385206&actual_until=1644385405&is_free=true`, { //https://justgonskapitest.azurewebsites.net    ${process.env.REACT_APP_URL}/api/Test
      mode: 'cors'
    }).then(res => {
      return res.json()
    }).then(val => {
      let list = val.results;
      console.log(list);
      let i = 0;
      console.log(list[1].place.coords.lon, list[1].place.coords.lat)
      this.setState({list: list});
    });
  }

  render() {


    return (
      <Map center={this.state.position} zoomControl={false} zoom={14} id='map' ref={this.bindMap}>
        <TileLayer
          minZoom={12}
          maxZoom={19}
          url="http://b.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          <div className='map__control'>
             <button className='map__button' onClick={this.zoomIn} >+</button>
             <button className='map__button' onClick={this.zoomOut} >-</button>
           </div>

           {this.state.list && this.state.list.map((val, ind) => {
             console.log(val);
             return (
               <Circle
                 key={ind}
                 center={[val.place.coords.lat, val.place.coords.lon]}
                 radius={50}
                 color='#3f51b5'
                 onClick={() => {this.setState({position: [val.place.coords.lat+0.008, val.place.coords.lon]})}}
               >
                 <Popup className='map__popup'>
                  <h3>{val.short_title}</h3>
                  <p>{val.description.replace('<p>', '').replace('</p>', '')}</p>
                  <Link to={`/event/${val.id}?back_url=map`} className='no-style'>
                    <Button size="medium" color="primary" variant='contained' fullWidth={true}>
                      Открыть полностью
                    </Button>
                  </Link>
                 </Popup>
               </Circle>
             )
           })}
      </Map>
     )
 }
}
