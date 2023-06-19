function insertHumidityInDom(humidity) {
  const day = document.querySelector('.day');
  const humidityDom = document.createElement('div');
  humidityDom.textContent = `Humidity: ${humidity}%`;
  day.appendChild(humidityDom);
}

export { insertHumidityInDom };