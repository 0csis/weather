function insertFutureMinMaxTempInDom(elementClass, mintemp, maxtemp, cOrF) {
  const div = document.querySelector(`.${elementClass}`);
  const minMaxtempDom = document.createElement('div');
  minMaxtempDom.textContent = `${mintemp}°${cOrF} | ${maxtemp}°${cOrF}`;
  div.appendChild(minMaxtempDom);
}

export { insertFutureMinMaxTempInDom };