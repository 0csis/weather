function insertFutureHumidityInDom(elementClass, humidity) {
  const div = document.querySelector(`.${elementClass}`);
  const humidityDom = document.createElement('div');
  humidityDom.textContent = `Humidity: ${humidity}%`;
  div.appendChild(humidityDom);
}

export { insertFutureHumidityInDom };
