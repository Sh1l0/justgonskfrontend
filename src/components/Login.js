import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };


  render() {
    return (
      <div className='login__paper'>
        <h2>Вход</h2>
        <form className='login__form' noValidate autoComplete="off">
         <TextField
           label="Логин"
           placeholder="Нагибатор2005"
           value={this.state.login}
           onChange={this.handleChange('login')}
           margin="normal"
         />
         <TextField
          label="Пароль"
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
        <Button variant="contained" color="primary" className='login__button'>
          Войти
        </Button>
       </form>
      </div>
    )
  }
}
