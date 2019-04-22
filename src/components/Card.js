import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

export default class MyCard extends Component {
  render() {
    return (
      <Card className="card">
        <div>
          <CardHeader
            title={this.props.title || <CircularProgress disableShrink />}
            subheader={this.props.date || null}
          />
          {
           this.props.id &&
            <CardMedia
              className="card__image"
              image={this.props.src}
              title="Paella dish"
            />
          }
          {
            this.props.id &&
            <CardContent>
              <Typography component="p">
                {this.props.description}
              </Typography>
            </CardContent>
          }
        </div>
        {
          this.props.id &&
          <CardActions>
            <Link to={'/event/' + this.props.id} className='no-style'>
              <Button size="medium" color="primary" variant='contained' fullWidth={true}>
                Открыть полностью
              </Button>
            </Link>
          </CardActions>
        }
      </Card>
    )
  }
}
