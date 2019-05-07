import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GMenu from './Menu';
import Settings from '@material-ui/icons/Settings'
import Menu from '@material-ui/core/Menu';

//import Profile from '@material-ui/icons/AccountCircle'

/* TODO:
  <IconButton color="inherit">
    <Profile style={{fontSize: 40}} />
  </IconButton>
*/

export default class Header extends Component {
  render() {
    return (
      <AppBar position="fixed" color='default' >
        <div className="center">
          <Toolbar  className="header">
            <GMenu />
            <Typography variant="h6" color="inherit">
              <i>JG</i>
            </Typography>
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
