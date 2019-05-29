import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link, Redirect } from "react-router-dom";
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import DateFnsUtils from '@date-io/date-fns';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker,
} from 'material-ui-pickers'



export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: props.isLogged,
      position: [55.03136920000018, 82.92307489999976],
      zoom: 14,
      dates: [],
      inputs: {
        images: [],
        place: {}
      }
    };
  }

  handleChange = (name, ind, address, title) => event => {

    let inputs = this.state.inputs;
    if(name === 'place') {
      this.setState({address: address, title: title});
      inputs.place.id = ind;
    }
    else if(name === 'image') {
      inputs.images[ind] = {image: event.target.value};
    }
    else if(name === 'date' && ind === 0) {

      this.setState({start: event});
    }
    else if(name === 'date' && ind === 1) {

      this.setState({end: event});
    }
    else {

      inputs[name] = event.target.value;
    }
    this.setState({ inputs: inputs });
  };

  handleSubmit = (event) => {
    let start = this.state.start;
    let end = this.state.end;
    if(start) {
      this.state.start.setHours(this.state.start.getHours() + 7);
    }
    if(end) {
      this.state.end.setHours(this.state.end.getHours() + 7);
    }
    let inputs = this.state.inputs;
    inputs["tags"] = [
                "шоу (развлечения)",
                "мультимедиа",
                "культура и искусство",
                "красиво",
                "новое на сайте",
                "интересное",
                "картины, живопись, графика",
                "выставки",
                "12+"
            ];
    inputs["categories"] = [
                "concert",
                "festival"
            ];
    inputs['scheduled_dates'] = [];
    inputs['single_dates'] = [];
    inputs['single_dates'][0] = {start: start.toISOString().substr(0, 19), end: start.toISOString().substr(0, 19)};
    event.preventDefault();
    let form = inputs;
    let options = {
        credentials: 'include',
        method: "POST",
        body: JSON.stringify(form)
    };
    options.headers = {"Content-Type": "application/json"};
    fetch(`${process.env.REACT_APP_URL}/api/Events`, options)
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

  componentDidMount() {
    this.props.checkLogin();
    this.props.hideHeader(true);
    fetch(`${process.env.REACT_APP_URL}/api/Places`,{//public-api/v1.4/events/?lang=ru&fields=dates,short_title,images,title,description,id&expand=dates&location=nsk&actual_since=1444385206&actual_until=1644385405&is_free=true`, { //https://justgonskapitest.azurewebsites.net    ${process.env.REACT_APP_URL}/api/Test
      mode: 'cors'
    }).then(res => {
      return res.json()
    }).then(val => {
      let list = val.results;
      this.setState({list: list});
    });
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
          <h2>Добавление события</h2>
          <form className='add__form' noValidate autoComplete="off">
           <TextField
             fullWidth={true}
             label="Название"
             placeholder="Музыкант на Площади Ленина"
             onChange={this.handleChange('title')}
             margin="normal"
           />

           <TextField
             fullWidth={true}
             label="Короткое название"
             placeholder="Музыкант"
             onChange={this.handleChange('short_title')}
             margin="normal"
           />

           <TextField
             fullWidth={true}
             multiline
             label="Короткое описание"
             placeholder="Минимум 50 символов"
             onChange={this.handleChange('description')}
             margin="normal"
           />

           <TextField
             fullWidth={true}
             multiline
             label="Полное описание"
             placeholder="Максимально подробно опишите событие"
             onChange={this.handleChange('body_text')}
             margin="normal"
           />

           <Map
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
             {
               this.state.list &&
               this.state.list.map((val, ind) => {
                 return (
                   <Marker
                     key={ind}
                     position={[val.coords.lat, val.coords.lon]}
                     onClick={this.handleChange('place', val.id, val.address, val.title)}
                   >
                     <Popup className='add__popup'>
                      <div>
                        {val.title}
                        <br/>
                        {val.address}
                      </div>
                     </Popup>
                   </Marker>

                 )
               })
             }
           </Map>
           {
             this.state.address &&
             <div className='add__address'>
              Адрес: {this.state.address}
              <br/>
              Название: {this.state.title}
             </div>
           }
           <TextField
             fullWidth={true}
             multiline
             label="Изображение"
             placeholder="https://kudago.com/media/images/event/1a/89/1a89705da915398572538d7fc4a736fc.jpg"
             onChange={this.handleChange('image', 0)}
             margin="normal"
           />

           <TextField
             fullWidth={true}
             multiline
             label="Изображение"
             placeholder="https://kudago.com/media/images/event/1a/89/1a89705da915398572538d7fc4a736fc.jpg"
             onChange={this.handleChange('image', 1)}
             margin="normal"
           />

           <TextField
             fullWidth={true}
             multiline
             label="Изображение"
             placeholder="https://kudago.com/media/images/event/1a/89/1a89705da915398572538d7fc4a736fc.jpg"
             onChange={this.handleChange('image', 2)}
             margin="normal"
           />

           <MuiPickersUtilsProvider utils={DateFnsUtils}>

               <DatePicker
                 margin="normal"
                 label="Дата начала"
                 value={this.state.start || new Date()}
                 onChange={this.handleChange('date', 0)}
               />
               <TimePicker
                 margin="normal"
                 label="Время начала"
                 value={this.state.start || new Date()}
                 onChange={this.handleChange('date', 0)}
               />
               <br/>
               <DatePicker
                 margin="normal"
                 label="Дата окончания"
                 value={this.state.end || new Date()}
                 onChange={this.handleChange('date', 1)}
               />
               <TimePicker
                 margin="normal"
                 label="Время окончания"
                 value={this.state.end || new Date()}
                 onChange={this.handleChange('date', 1)}
               />
           </MuiPickersUtilsProvider>

           <TextField
             fullWidth={true}
             label="Источник"
             placeholder="Ссылка на источник/себя"
             onChange={this.handleChange('source')}
             margin="normal"
           />
           {
             this.state.info &&
             <div className='add__error'>{this.state.info}</div>
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
