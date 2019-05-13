const formatDate = date => date.toISOString().substr(0, 19);

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

export const getDate = obj => {
  
  return obj.next_on_week ? obj.next_on_week.start.replace(/-/g, '.').replace(/T/g, ' '): 'Нет на этой неделе';
}


export const toggleClassName = obj => obj.props.className.match('hide') ? obj.props.className.replace('hide', ''): obj.props.className + ' hide';
