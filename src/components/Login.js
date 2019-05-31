import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link, Redirect } from "react-router-dom";
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: props.isLogged
    };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
    if(this.state.info) {
      this.setState({info: null});
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let form = this.fillForm();
    let options = {
        method: "POST",
        mode: "cors",
        credentials: "include",
        body: JSON.stringify(form)
    };
    options.headers = {"Content-Type": "application/json"};
    fetch(`${process.env.REACT_APP_URL}/api/auth/login`, options)
          .then(response => {
            if(response.ok) {
              this.setState({logged: true});
            }
            else {
              this.setState({
                  info: 'Неверные логин и/или пароль'
              });
            }
          })
        .catch(error => {
            console.error(error);

        })
  }

  fillForm() {
    let form = {};
    for (let input in this.state) {
        form[input] = this.state[input];
    }
    return form;
  }

  componentDidMount() {
    this.props.checkLogin();
    this.props.hideHeader(true);
  }

  render() {
    return (
      <div className='login'>
        {this.state.logged && <Redirect to='/' />}
        <Link to='/' className='no-style'>
          <Button size="small" color="primary" >
            <KeyboardArrowLeft />
            назад
          </Button>
        </Link>
        <div className='login__paper'>
          <h2>Вход</h2>
          <form className='login__form' noValidate autoComplete="on">
           <TextField
             label="Логин"
             placeholder="orelAndrewsky"
             value={this.state.login}
             onChange={this.handleChange('name')}
             margin="normal"
             autoComplete="username"
           />
           <TextField
            label="Пароль"
            type="password"
            autoComplete="current-password"
            onChange={this.handleChange('password')}
            margin="normal"
          />
          {
            this.state.info &&
            <div className='add__error'>{this.state.info}</div>
          }
          <Button variant="contained" color="primary" onClick={this.handleSubmit} className='login__button'>
            Войти
          </Button>
         </form>
        </div>
      </div>
    )
  }
}
