function insertFutureWindInDom(elementClass, wind, kOrM) {
  const div = document.querySelector(`.${elementClass}`);
  const windDom = document.createElement('div');
  windDom.textContent = `Max wind: ${wind} ${kOrM}`;
  div.appendChild(windDom);
}

export { insertFutureWindInDom };
