import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GMenu from './Menu';
import Profile from '@material-ui/icons/AccountCircle'
import Settings from '@material-ui/icons/Settings'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import getFiltersList from './Flags';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuLink: null,
      categories: props.flags,
    }
  }

  handleClick = event => {
    this.setState({ menuLink: event.currentTarget });
  };

  handleClose = () => {
    this.props.addFlags(this.state.categories);
    this.setState({ menuLink: null });
  };

  handleChange = name => event => {
    let categories = this.state.categories;
    categories[name] = event.target.checked;
    this.setState({ categories: categories });
  };

  createList = () => {
    let filters = getFiltersList();
    let filtersList = [];
    for (let filter in filters) {
      filtersList.push(
        <MenuItem key={filter} className='header__menu' >
          <FormControlLabel

            control={
              <Checkbox
                checked={this.state.categories[filter]}
                onChange={this.handleChange(filter)}
                value={filter}
                color="primary"

              />
            }
            label={filters[filter]}
          />
        </MenuItem>
      );
    }
    return filtersList;
  }

  render() {

    return (
      <AppBar position="fixed" color='default' >
        <div className="center">
          <Toolbar  className="header">
            <GMenu />
            <Typography variant="h6" color="inherit">
              <i>JG</i>
            </Typography>
            <div>
              <IconButton color="inherit">
                <Profile style={{fontSize: 40}} />
              </IconButton>
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
          </Toolbar>
        </div>
      </AppBar>
    )
  }
}
