import { getCityFromIpData } from './getCityFromIpData';
import { getForecastData } from './getForecastData';
import { CurrentWeatherDataCreator } from './CurrentWeatherDataCreator';
import { insertLocationInDom } from './insertLocationInDom';
import { insertDateInDom } from './insertDateInDom';
import { insertIconInDom } from './insertIconInDom';
import { insertTempInDom } from './insertTempInDom';
import { insertWindInDom } from './insertWindInDom';
import { insertWindDirInDom } from './insertWindDirInDom';
import { insertHumidityInDom } from './insertHumidityInDom';
import { insertRainInDom } from './insertRainInDom';
import { insertSnowInDom } from './insertSnowInDom';
import { insertSunriseInDom } from './insertSunriseInDom';
import { insertSunsetInDom } from './insertSunsetInDom';
import { insertUvInDom } from './insertUvInDom';
import { addDaysInfo } from './addDaysInfo';
import { changeUnitMeasures } from './changeUnitMeasures';
import { formListener } from './formListener';

async function processAndReturnSelectedDayData(unitMeasure, location) {
  if (location == undefined) {
    location = await getCityFromIpData();
  }
  const data = await getForecastData(location);
  console.log(data);
  if (data == 'error') {
    null;
  } else {
    const dayData = new CurrentWeatherDataCreator(data.forecast.forecastday[0].date, data.location.name, data.location.country, data.current.temp_c, data.current.temp_f, data.current.is_day, data.current.wind_kph, data.current.wind_mph, data.current.humidity, data.current.condition.text, data.current.condition.icon, data.current.uv, data.current.wind_dir, data.forecast.forecastday[0].day.daily_chance_of_rain, data.forecast.forecastday[0].day.daily_chance_of_snow, data.forecast.forecastday[0].astro.sunrise, data.forecast.forecastday[0].astro.sunset, data.current.uv);

    insertLocationInDom(dayData.city, dayData.country);
    insertDateInDom(dayData.date);
    insertIconInDom(dayData.icon);

    if (unitMeasure == 'C') {
      insertTempInDom(dayData.temp_c, 'C');
      insertWindInDom(dayData.wind_kph, 'kph');
    } else if (unitMeasure == 'F') {
      insertTempInDom(dayData.temp_f, 'F');
      insertWindInDom(dayData.wind_mph, 'mph');
    }

    insertWindDirInDom(dayData.wind_dir);
    insertHumidityInDom(dayData.humidity);
    insertRainInDom(dayData.rain);
    insertSnowInDom(dayData.snow);
    insertSunriseInDom(dayData.sunrise);
    insertSunsetInDom(dayData.sunset);
    insertUvInDom(dayData.uv);
  }

  addDaysInfo(location);
  changeUnitMeasures(location);
  formListener();
}

export { processAndReturnSelectedDayData };
