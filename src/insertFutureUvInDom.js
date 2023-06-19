function insertFutureUvInDom(elementClass, uv) {
  const div = document.querySelector(`.${elementClass}`);
  const uvDom = document.createElement('div');
  uvDom.textContent = `Uv: ${uv}`;
  div.appendChild(uvDom);
}

export { insertFutureUvInDom };