function insertUvInDom(uv) {
  const day = document.querySelector('.day');
  const uvDom = document.createElement('div');
  uvDom.textContent = `Uv: ${uv}`;
  day.appendChild(uvDom);
}

export { insertUvInDom };