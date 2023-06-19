async function getForecastData(location) {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=c49e4da312b346048e7224022233005&q=${location}&days=6`, { mode: 'cors' });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    return 'error';
  }
}

export { getForecastData };
