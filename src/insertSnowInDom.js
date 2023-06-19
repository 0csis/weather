function insertSnowInDom(snow) {
  const day = document.querySelector('.day');
  const snowDom = document.createElement('div');
  snowDom.textContent = `Chance of snow: ${snow}%`;
  day.appendChild(snowDom);
}

export { insertSnowInDom };