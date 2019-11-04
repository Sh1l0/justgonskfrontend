import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import GMenu from './Menu';
import Settings from '@material-ui/icons/Settings'
import Menu from '@material-ui/core/Menu';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: props.isLogged
    }
  }

  render() {
    return (
       !this.props.isHidden &&
        <AppBar position="fixed" color='default' >
        <div className="center">
          <Toolbar  className="header">
            <GMenu />
            <div className='header__buttons-area'>
              <Link to='/login' className='no-style header__login'>
                <Button size="medium" color="primary" variant='contained' fullWidth={true}>
                  Вход
                </Button>
              </Link>
            </div>
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
