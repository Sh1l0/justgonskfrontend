const formatDate = date => date.toISOString().substr(0, 19);

const findNearestDay = (daysList, currentDay) => {
  let daysLeft = 7;
  for(let day of daysList) {
    if(((day + 1 - currentDay) < daysLeft) && ((day + 1 - currentDay) >= 0)) {
      daysLeft = day + 1 - currentDay ;
    }
  }
  return daysLeft;
}

export const getBackUrl = props => (new URLSearchParams(props.location.search)).get('back_url') || '';

export const getRangeQuery = () => {
  const today = new Date();
  const nextDay = new Date();
  const prevDay = new Date();
  prevDay.setDate(today.getDate());
  nextDay.setDate(today.getDate() + 2);
  const formatedToday = formatDate(prevDay);
  const formatedNextDay = formatDate(nextDay);
  return `from=${formatedToday}&to=${formatedNextDay}`
}

export const addOffset = date => {
  let eventDate = getDate(date);
  eventDate.setTime(eventDate.getTime() - (eventDate.getTimezoneOffset() * 60000));
  return eventDate.toISOString().substr(0, 16).replace(/-/g, '.').replace(/T/g, ' ');
}


export const getDate = obj => {
  let nearestEvent;
  if(obj.current) {
    nearestEvent = new Date(obj.current.start);
  }
  else {
    nearestEvent = new Date(obj.next_on_week.start);
  }
  return nearestEvent;
}

export const calculateTimerStr = (time) => {
  if(!time) {
    return;
  }

  time = getLeftTime(time);
  if(!time) return 'Событие уже идёт';
  let names = {
    0: ['день', 'дня', 'дней'],
    1: ['час', 'часа', 'часов'],
    2: ['минутa', 'минуты', 'минут']
  }
  let formated = time.map((val, ind) => {
      if(val < 1) return null;
      if(val === 1 || (val % 10 === 1 && val !== 11)) return `${val} ${names[ind][0]}`;
      if(val > 1 && val < 5 || val % 10 > 1 && val % 10 < 5 && !(val >10 && val < 15)) return `${val} ${names[ind][1]}`;
      return `${val} ${names[ind][2]}`;
  });

  return 'Осталось: ' + formated.join(' ');
}

const getLeftTime = time => {
  if(time < new Date()) return null;
  let date = getAdditionalDate(time)
  if(date == 'Invalid Date') return;
  let days = Math.floor(((time - new Date())/(1000 * 3600))/24);
  date = date.toISOString().substr(11, 8).split(':');
  date.unshift(days);
  date.pop();
  console.log(date);

  return date;
}

export const getAdditionalDate = eventDate => new Date((eventDate - new Date()));

export const toggleClassName = obj => obj.props.className.match('hide') ? obj.props.className.replace('hide', ''): obj.props.className + ' hide';
