function insertFutureRainInDom(elementClass, rain) {
  const div = document.querySelector(`.${elementClass}`);
  const rainDom = document.createElement('div');
  rainDom.textContent = `Chance of rain: ${rain}%`;
  div.appendChild(rainDom);
}

export { insertFutureRainInDom };