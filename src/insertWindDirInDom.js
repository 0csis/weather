function insertWindDirInDom(wind_dir) {
  const day = document.querySelector('.day');
  const windDirDom = document.createElement('div');
  windDirDom.textContent = `Wind direction: ${wind_dir}`;
  day.appendChild(windDirDom);
}

export { insertWindDirInDom };