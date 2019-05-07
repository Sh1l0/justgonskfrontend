const formatDate = date => date.toISOString().substr(0, 19);

export const getRangeQuery = () => {
  const today = new Date();
  const nextDay = new Date();
  nextDay.setDate(today.getDate() + 2);
  const formatedToday = formatDate(today);
  const formatedNextDay = formatDate(nextDay);
  return `from=${formatedToday}&to=${formatedNextDay}`
}

export const getDate = obj => obj.next_on_week ? obj.next_on_week.start.replace(/-/g, '.').replace(/T/g, ' '): 'Нет на этой неделе';
