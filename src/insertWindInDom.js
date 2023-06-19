function insertWindInDom(wind, kOrM) {
  const day = document.querySelector('.day');
  const windDom = document.createElement('div');
  windDom.textContent = `Wind: ${wind} ${kOrM}`;
  day.appendChild(windDom);
}

export { insertWindInDom };