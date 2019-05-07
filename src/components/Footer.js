import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default class Footer extends Component {
  render() {
    return (
      <div >
        <AppBar position="static" color="default" >
          <Toolbar  className='footer__center'>
            <Typography variant="overline" color="inherit">
              <div className='footer__text'>Наша почта:</div>
              <a href="mailto:email@mail.mal" className="footer__mail">andrey.shilkin2010@yandex.ru</a>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
