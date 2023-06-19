function insertRainInDom(rain) {
  const day = document.querySelector('.day');
  const rainDom = document.createElement('div');
  rainDom.textContent = `Chance of rain: ${rain}%`;
  day.appendChild(rainDom);
}

export { insertRainInDom };