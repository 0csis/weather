function insertFutureSnowInDom(elementClass, snow) {
  const div = document.querySelector(`.${elementClass}`);
  const snowDom = document.createElement('div');
  snowDom.textContent = `Chance of snow: ${snow}%`;
  div.appendChild(snowDom);
}

export { insertFutureSnowInDom };