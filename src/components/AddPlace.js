import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import {Map, TileLayer, Marker} from 'react-leaflet';
import L from 'leaflet';
import Button from '@material-ui/core/Button';
import { Link, Redirect } from "react-router-dom";
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: props.isLogged,
      position: [55.03136920000018, 82.92307489999976],
      zoom: 14,
      inputs: {}
    };
  }

  handleChange = name => event => {
    let inputs = this.state.inputs;
    inputs[name] = event.target.value;
    this.setState({ inputs: inputs });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let form = this.state.inputs;
    if(!form.address || !form.title) {
      this.setState({error: 'Не все поля заполнены!'});
      return;
    }
    let options = {
        method: "POST",
        body: JSON.stringify(form)
    };
    options.headers = {"Content-Type": "application/json"};
    fetch(`${process.env.REACT_APP_URL}/api/Places`, options)
          .then(response => {
            if(response.ok) {
              this.setState({logged: false});
            }
          })
        .catch(error => {
            console.error(error);
            this.setState({
                info: 'Ошибка'
            });
        })
  }

  selectPosition = e => {
    const x = e.latlng.lat;
    const y = e.latlng.lng;
    this.getAddress([x, y])
      .then(response => {
        return response.json();
      })
      .then(res => {

        const address = [];
        if(res.address.road) {
          address.push(res.address.road);
        }
        if(res.address.house_number) {
          address.push(res.address.house_number);
        }
        if(res.address.city_district) {
          address.push(res.address.city_district);
        }
        address = address.join(', ');
        let inputs = this.state.inputs;
        inputs['address'] = address;
        inputs['coords'] = {lat: res.lat, lon: res.lon};
        this.setState({inputs: inputs})

      })
      .catch(error => {
        console.error(error);
      })
  }

  getAddress(coordinates) {
    return fetch(`https://nominatim.openstreetmap.org/reverse?lat=${coordinates[0]}&lon=${coordinates[1]}&addressdetails=1&namedetails=1&format=json`);
  }

  getIcon = () => {
    let url = "/marker_red.svg";
    var icon = L.icon({
      iconUrl: `${url}`,
      iconSize: [70, 70],
      iconAnchor: [35, 60]// size of the icon
    });
    return icon;
  }

  componentDidMount() {
    this.props.checkLogin();
    this.props.hideHeader(true);
  }

  render() {
    return (
      <div className='add'>
        {!this.state.logged && <Redirect to='/' />}
        <Link to='/' className='no-style'>
          <Button size="small" color="primary" >
            <KeyboardArrowLeft />
            назад
          </Button>
        </Link>
        <div className='login__paper login_big'>
          <h2>Добавление Места</h2>
          <form className='add__form' noValidate autoComplete="off">
           <TextField
             fullWidth={true}
             label="Название"
             placeholder="Театр Оперы и Балета"
             onChange={this.handleChange('title')}
             margin="normal"
           />
           Поставьте маркер на карте
           <Map
             onClick={(e) => {this.selectPosition(e)}}
             center={this.state.position}
             zoomControl={false}
             zoom={this.state.zoom}
             className='form__map'
             ref={this.bindMap}
           >
             <TileLayer
               minZoom={12}
               maxZoom={19}
               url="http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png"
               attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
             />
             <Marker
                   className='map__circle no-click'
                   position={this.state.inputs.coords || [0, 0]}
                   icon={this.getIcon()}
                 >
             </Marker>
           </Map>

           {
             this.state.inputs.address &&
             <div className='add__address'>
              Адрес: {this.state.inputs.address}
              <br/>
              Координаты: {this.state.inputs.coords.lat + ' ' + this.state.inputs.coords.lon}
             </div>
           }
           {
             this.state.error &&
             <div className='add__error'>{this.state.error}</div>
           }
          <Button variant="contained" color="primary" onClick={this.handleSubmit} className='login__button'>
            Добавить
          </Button>
         </form>
        </div>
      </div>
    )
  }
}
