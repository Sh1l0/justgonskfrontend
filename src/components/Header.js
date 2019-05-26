import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GMenu from './Menu';
import Settings from '@material-ui/icons/Settings'
import Menu from '@material-ui/core/Menu';
import { Link } from "react-router-dom";
import Profile from '@material-ui/icons/AccountCircle'
import Button from '@material-ui/core/Button';
/* TODO:
  <IconButton color="inherit">
    <Profile style={{fontSize: 40}} />
  </IconButton>
*/

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: props.isLogged
    }
  }

  getUrl = () => {
    console.log(document.location)
  }

  render() {
    this.getUrl();
    return (
       !this.props.isHidden &&
        <AppBar position="fixed" color='default' >
        <div className="center">
          <Toolbar  className="header">
            <GMenu />
            {
              !this.props.isLogged &&
              <div className='header__buttons-area'>
                <Link to='/login' className='no-style header__login'>
                  <Button size="medium" color="primary" variant='contained' fullWidth={true}>
                    Вход
                  </Button>
                </Link>
                <Link to='/register' className='no-style'>
                  <Button size="medium" color="primary" variant='contained' fullWidth={true}>
                    Регистрация
                  </Button>
                </Link>
              </div>
            }
            {
              this.props.isLogged &&
              <div className='header__buttons-area'>
                <Link to='/add_place' className='no-style header__login'>
                  <Button size="medium" className='header__buttons' color="primary" variant='contained' fullWidth={true}>
                    Добавить место
                  </Button>
                </Link>
                <Link to='/add_event' className='no-style'>
                  <Button size="medium" color="primary" variant='contained' className='header__buttons' fullWidth={true}>
                    Добавить событие
                  </Button>
                </Link>
              </div>
            }
            {
              this.props.isMap &&
              <div>
                <IconButton onClick={this.handleClick}>
                  <Settings style={{fontSize: 40}}/>
                </IconButton>
                <Menu
                  anchorEl={this.state.menuLink}
                  open={Boolean(this.state.menuLink)}
                  onClose={this.handleClose}
                >
                  {this.createList()}
                </Menu>
              </div>
            }
          </Toolbar>
        </div>
      </AppBar>
    )
  }
}
