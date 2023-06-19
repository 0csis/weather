function FutureWeatherDataCreator(date, maxtemp_c, maxtemp_f, mintemp_c, mintemp_f, maxwind_kph, maxwind_mph, humidity, icon, uv, rain, snow, sunrise, sunset) {
  this.date = date;
  this.maxtemp_c = maxtemp_c;
  this.maxtemp_f = maxtemp_f;
  this.mintemp_c = mintemp_c;
  this.mintemp_f = mintemp_f;
  this.maxwind_kph = maxwind_kph;
  this.maxwind_mph = maxwind_mph;
  this.humidity = humidity;
  this.icon = icon;
  this.uv = uv;
  this.rain = rain;
  this.snow = snow;
  this.sunrise = sunrise;
  this.sunset = sunset;
}

export { FutureWeatherDataCreator };