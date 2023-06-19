import { getForecastData } from './getForecastData';
import { FutureWeatherDataCreator } from './FutureWeatherDataCreator';
import { insertFutureDateInDom } from './insertFutureDateInDom';
import { insertFutureIconInDom } from './insertFutureIconInDom';
import { insertFutureMinMaxTempInDom } from './insertFutureMinMaxTempInDom';
import { insertFutureWindInDom } from './insertFutureWindInDom';
import { insertFutureHumidityInDom } from './insertFutureHumidityInDom';
import { insertFutureRainInDom } from './insertFutureRainInDom';
import { insertFutureSnowInDom } from './insertFutureSnowInDom';
import { insertFutureSunriseInDom } from './insertFutureSunriseInDom';
import { insertFutureSunsetInDom } from './insertFutureSunsetInDom';
import { insertFutureUvInDom } from './insertFutureUvInDom';

async function addDaysInfo(location) {
  const data = await getForecastData(location);
  if (data == 'error') {
    alert('Invalid location');
  } else {
    for (let i = 0; i < data.forecast.forecastday.length - 1; i++) {
      const restOfDays = document.querySelector('.restOfDays');
      const div = document.createElement('div');
      div.classList.add(`d${i + 1}`);
      div.classList.add('rest');
      restOfDays.appendChild(div);

      const dayData = new FutureWeatherDataCreator(data.forecast.forecastday[i + 1].date, data.forecast.forecastday[i + 1].day.maxtemp_c, data.forecast.forecastday[i + 1].day.maxtemp_f, data.forecast.forecastday[i + 1].day.mintemp_c, data.forecast.forecastday[i + 1].day.mintemp_f, data.forecast.forecastday[i + 1].day.maxwind_kph, data.forecast.forecastday[i + 1].day.maxwind_mph, data.forecast.forecastday[i + 1].day.avghumidity, data.forecast.forecastday[i + 1].day.condition.icon, data.forecast.forecastday[i + 1].day.uv, data.forecast.forecastday[i + 1].day.daily_chance_of_rain, data.forecast.forecastday[i + 1].day.daily_chance_of_snow, data.forecast.forecastday[i + 1].astro.sunrise, data.forecast.forecastday[i + 1].astro.sunset);

      insertFutureDateInDom(`d${i + 1}`, dayData.date);
      insertFutureIconInDom(`d${i + 1}`, dayData.icon);

      const otherTemp = document.querySelector('.otherTemp');
      if (otherTemp.textContent == '°F') {
        insertFutureMinMaxTempInDom(`d${i + 1}`, dayData.mintemp_c, dayData.maxtemp_c, 'C');
        insertFutureWindInDom(`d${i + 1}`, dayData.maxwind_kph, 'kph');
      } else if (otherTemp.textContent == '°C') {
        insertFutureMinMaxTempInDom(`d${i + 1}`, dayData.mintemp_f, dayData.maxtemp_f, 'F');
        insertFutureWindInDom(`d${i + 1}`, dayData.maxwind_mph, 'mph');
      }
      insertFutureHumidityInDom(`d${i + 1}`, dayData.humidity);
      insertFutureRainInDom(`d${i + 1}`, dayData.rain);
      insertFutureSnowInDom(`d${i + 1}`, dayData.snow);
      insertFutureSunriseInDom(`d${i + 1}`, dayData.sunrise);
      insertFutureSunsetInDom(`d${i + 1}`, dayData.sunset);
      insertFutureUvInDom(`d${i + 1}`, dayData.uv);
    }
  }
}

export { addDaysInfo };
