import React, { Component } from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CircularProgress from '@material-ui/core/CircularProgress';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// TODO:   <Link to={`/map?lon=52.343534&lat=82.321434`}>На карте</Link>

export default class Event extends Component {

  constructor() {
    super();
    this.state = {
      activeStep: 0,
      steps: [],
      title: ""
    }
  }

  checkUrl = () => {
    let fullUrl = document.URL;
    let parts = fullUrl.split('/');
    for(let each of parts) {
      if(each.split('?').pop() === 'back_url=map') {
        return '/map';
      }
    }
    return '/';
  }

  getId = () => {
    let parts = document.URL.split('/');
    let url = parts.pop();
    return !url ? parts.pop(): url;
  }

  getDate(obj) {
    return obj.next_on_week ? 'Ближайшая дата: ' + obj.next_on_week.start.replace(/-/g, '.').replace(/T/g, ' '): 'Событие прошло';
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_URL}/api/Events/${this.getId()}`, {
        mode: 'cors'
      }
    ).then(res => {
      return res.json();
    }).then(val => {
      console.log(val);
      let steps = val.images.map((src, ind) => {
        return {imgPath: {background: `url(${src.image}) center no-repeat`, backgroundSize: 'contain'}, label: `Картинка ${ind}`}
      });
      let maxSteps = steps.length;
      this.setState({
        title: val.title,
        steps: steps,
        maxSteps: maxSteps,
        body: val.body_text,
        place: val.place.address,
        date: this.getDate(val),
      })
    });
  }

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    return (
      <div className='back'>
        <Link to={this.checkUrl()} className='no-style'>
          <Button size="small" color="primary" >
            <KeyboardArrowLeft />
            назад
          </Button>
        </Link>
        <Card className='event'>
          <CardHeader
            title={this.state.title.toUpperCase() || <CircularProgress disableShrink />}
            className='event__header'
          />
          {
            this.state.steps[0] &&
            this.state.steps[0].imgPath &&
            <AutoPlaySwipeableViews
              axis='x'
              className='event__images_width'
              index={this.state.activeStep}
              onChangeIndex={this.handleStepChange}
              enableMouseEvents
            >
              {this.state.steps.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(this.state.activeStep - index) <= 2 ? (
                    <div className='event__images' style={step.imgPath} ></div>
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
          }
          {this.state.maxSteps && <MobileStepper
            className='event__control-bar'
            steps={this.state.maxSteps}
            position="static"
            activeStep={this.state.activeStep}
            nextButton={
              <Button size="small" onClick={this.handleNext} disabled={this.state.activeStep === this.state.maxSteps - 1}>
                <span className='event__control'>Следующая</span>
                <KeyboardArrowRight />
              </Button>
            }
            backButton={
              <Button size="small" onClick={this.handleBack} disabled={this.state.activeStep === 0}>
                <KeyboardArrowLeft />
                <span className="event__control">Предыдущая</span>
              </Button>
            }
          />}
          {this.state.body &&
           <p className='event__text'>
             {this.state.body.replace(/<.*?>/g, ' ')}
           </p>}
          {this.state.body && <div className="event__additional">
            <div>{'Адрес: ' + this.state.place}

            </div>
            <div className='event__date'>{this.state.date}</div>
          </div>}
        </Card>
      </div>
    );
  }
}
