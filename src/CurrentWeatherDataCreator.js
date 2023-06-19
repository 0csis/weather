function CurrentWeatherDataCreator(date, city, country, temp_c, temp_f, is_day, wind_kph, wind_mph, humidity, text, icon, uv, wind_dir, rain, snow, sunrise, sunset) {
  this.date = date;
  this.city = city;
  this.country = country;
  this.temp_c = temp_c;
  this.temp_f = temp_f;
  this.is_day = is_day;
  this.wind_kph = wind_kph;
  this.wind_mph = wind_mph;
  this.humidity = humidity;
  this.text = text;
  this.icon = icon;
  this.uv = uv;
  this.wind_dir = wind_dir;
  this.rain = rain;
  this.snow = snow;
  this.sunrise = sunrise;
  this.sunset = sunset;
}

export { CurrentWeatherDataCreator };
