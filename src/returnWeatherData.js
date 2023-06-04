async function returnWeatherData(location) {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=c49e4da312b346048e7224022233005&q=${location}`);
    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.log('Not a valid location.');
  }
}

export { returnWeatherData };
