import React, { Component } from 'react';
import { Link } from "react-router-dom";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import IconList from '@material-ui/icons/ViewAgenda';
import IconPeople from '@material-ui/icons/People';
import IconMap from '@material-ui/icons/Map';
import Button from '@material-ui/core/Button';

export default class Menu extends Component {
  constructor() {
    super();
    this.state = {
      left: false,
    };
  }

  toggleDrawer = (open) => () => {
    this.setState({
      left: open,
    });
  };

  render() {
    return (
      <div>
        <Button color="inherit" onClick={this.toggleDrawer(true)}>
          <MenuIcon style={{fontSize: 40}} />
        </Button>
        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer(false)}
          onOpen={this.toggleDrawer(true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            <List className='menu'>
              <ListItem >
                <div className='menu__header'>Just Go<br/><span className='menu__subheader'>просто сходи</span></div>
              </ListItem>
              <Divider />
              <Link to='/' className='no-style'>
                <ListItem button >
                  <ListItemText primary='Список' />
                  <IconList />
                </ListItem>
              </Link>
              <Divider />
              <Link to='/map' className='no-style'>
                <ListItem button >
                  <ListItemText primary='Карта' />
                  <IconMap />
                </ListItem>
              </Link>
              <Divider />
              <Link to='/about' className='no-style'>
                <ListItem button >
                  <ListItemText primary='О нас' />
                  <IconPeople />
                </ListItem>
              </Link>
              <Divider />
            </List>
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}
