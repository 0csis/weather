async function getFutureWeatherData(location) {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/future.json?key=c49e4da312b346048e7224022233005&q=${location}`, { mode: 'cors' });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    return 'error';
  }
}

export { getFutureWeatherData };
