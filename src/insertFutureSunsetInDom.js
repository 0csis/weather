function insertFutureSunsetInDom(elementClass, sunset) {
  const div = document.querySelector(`.${elementClass}`);
  const sunsetDom = document.createElement('div');
  sunsetDom.textContent = `Sunset: ${sunset}`;
  div.appendChild(sunsetDom);
}

export { insertFutureSunsetInDom };