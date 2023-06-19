function formatDateToDay(dateString) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date(dateString);
  const dayOfWeek = daysOfWeek[date.getUTCDay()];
  
  return dayOfWeek;
}

export { formatDateToDay };