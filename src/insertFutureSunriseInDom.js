function insertFutureSunriseInDom(elementClass, sunrise) {
  const div = document.querySelector(`.${elementClass}`);
  const sunriseDom = document.createElement('div');
  sunriseDom.textContent = `Sunrise: ${sunrise}`;
  div.appendChild(sunriseDom);
}

export { insertFutureSunriseInDom };