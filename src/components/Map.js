import React, { Component } from 'react';

import {Map, TileLayer, Circle, Popup, Tooltip} from 'react-leaflet';

export default class MapPage extends Component {
  constructor() {
     super()
     this.state = {
       position: [55.015850, 82.912734],
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

  componentDidMount() { /*
      let map = new L.Map('map', );

	// create the tile layer with correct attribution
	     let osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	     let osmAttrib='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
	     let osm = new L.TileLayer(osmUrl, {zoomControl: false, minZoom: 12, maxZoom: 19, attribution: osmAttrib});

	// start the map in South-East England
	     map.setView(new L.LatLng(55.015850, 82.912734),12);
	     map.addLayer(osm);

       let corners = map._controlCorners,
       l = 'leaflet-',
       container = map._controlContainer;

       function createCorner(vSide, hSide) {
         let className = l + vSide + ' ' + l + hSide;
         corners[vSide + hSide] = L.DomUtil.create('div', className, container);
       }
       createCorner('verticalcenter', 'right');
// Change the position of the Zoom Control to a newly created placeholder.
       map.zoomControl.setPosition('verticalcenterright');
       L.circle([55.015850, 82.912734], {radius: 50}).addTo(map);
       var myIcon = L.tooltip({direction: 'center', className: 'map__event-name'}).setContent('Название события').setLatLng([55.015850, 82.912734]).addTo(map);
// you can set .my-div-icon styles in CSS
*/
  }

  render() {
    return (
      <Map center={this.state.position} zoomControl={false} zoom={12} id='map' ref={this.bindMap}>
        <TileLayer
          minZoom={12}
          maxZoom={19}
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          <div className='map__control'>
             <button className='map__button' onClick={this.zoomIn} >+</button>
             <button className='map__button' onClick={this.zoomOut} >-</button>
           </div>
           <Circle center={[55.015850, 82.912734]} radius={50} color='#3f51b5'>
              <Tooltip permanent position={this.state.position}>Саня смотри ебать, карта!!</Tooltip>
           </Circle>
      </Map>
     )
 }
}
