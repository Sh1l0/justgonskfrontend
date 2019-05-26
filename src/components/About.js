import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link, Redirect } from "react-router-dom";
import {Map, TileLayer, Circle, Marker, Popup, Tooltip} from 'react-leaflet';
import L from 'leaflet';

import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import { getBackUrl } from './utils';



export default class Login extends Component {
  render() {
    return (
      <div className='about '>
        <div className='login__paper login_big'>
          <h1>О нас</h1>
          <h3>Just Go</h3>
          <p>
          JustGo показывает грядущие события города. Мероприятия берутся из базы, которая постоянно обновляется. Информация о событиях собирается в разных источниках, а также может быть добавлена администраторами.
          </p>
          <p>
          Основная особенность сервиса в том, что он ориентирован на локальные события, которых нет на крупных порталах-афишах. Все локальные события (выступления местных артистов, небольшие лекции, собрания по интересам) попадают на карту с удобной навигацией.
          </p>
          <h3>Создатели</h3>
          <ul>
            <li><a href="https://vk.com/openminded" className="footer__mail" target="_blank">Павел Фазлуктинов</a> - бэкенд специалист</li>
            <li><a href="https://vk.com/sh1l0_govno" className="footer__mail" target="_blank">Андрей Шилкин</a> - разработчик пользовательских интерфейсов</li>
            <li>Орёл Андрейский - специалист по работе с двумя БД одновременно</li>
          </ul>
          <p>
          <div className='footer__text'>Почта для связи: </div>
          <a href="mailto:email@mail.mal" className="footer__mail">andrey.shilkin2010@yandex.ru</a>
          </p>
        </div>
      </div>
    )
  }
}
