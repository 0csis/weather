function insertSunriseInDom(sunrise) {
  const day = document.querySelector('.day');
  const sunriseDom = document.createElement('div');
  sunriseDom.textContent = `Sunrise: ${sunrise}`;
  day.appendChild(sunriseDom);
}

export { insertSunriseInDom };