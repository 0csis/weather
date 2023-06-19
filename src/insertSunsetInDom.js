function insertSunsetInDom(sunset) {
  const day = document.querySelector('.day');
  const sunsetDom = document.createElement('div');
  sunsetDom.textContent = `Sunset: ${sunset}`;
  day.appendChild(sunsetDom);
}

export { insertSunsetInDom };