import React, { Component } from 'react';
import 'ol/ol.css';
import {Map, View} from 'ol';
import {fromLonLat} from 'ol/proj.js';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {defaults as defaultControls, Control} from 'ol/control.js';


export default class MapPage extends Component {
  constructor() {
     super()
   }

   componentDidMount() {
     let olCoordinates = fromLonLat([82.960728, 55.03897])
     const map = new Map({
       target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
    center: olCoordinates,
    zoom: 11
   })
});
   }

   render() {
     return (
       <div id="map"></div>
     )
 }
}
