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
  prevDay.setDate(today.getDate() -1);
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
  let daysLeft = findNearestDay(obj.scheduled_dates[0].schedules[0].days_of_week, (new Date).getDay());
  let eventDate = new Date();
  let today = new Date();
  let parsedStartTime = obj.scheduled_dates[0].schedules[0].start_time.split(':');
  eventDate.setHours(+parsedStartTime[0], +parsedStartTime[1]);
  if(daysLeft === 0 && eventDate < today) {
    daysLeft = findNearestDay(obj.scheduled_dates[0].schedules[0].days_of_week, (new Date).getDay() + 1) + 1;
  }
  eventDate.setDate(today.getDate() + daysLeft);
  return eventDate;
}

export const getAdditionalDate = eventDate => new Date(eventDate - new Date());

export const toggleClassName = obj => obj.props.className.match('hide') ? obj.props.className.replace('hide', ''): obj.props.className + ' hide';
