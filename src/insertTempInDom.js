function insertTempInDom(temp, cOrF) {
  const day = document.querySelector('.day');
  const tempDom = document.createElement('div');
  tempDom.classList.add('tempDom');
  const otherTemp = document.createElement('button');
  otherTemp.classList.add('otherTemp');
  if (cOrF == 'C') {
    otherTemp.textContent = '°F';
  } else if (cOrF == 'F') {
    otherTemp.textContent = '°C';
  }
  tempDom.textContent = `${temp}°${cOrF}`;
  tempDom.appendChild(otherTemp);
  day.appendChild(tempDom);
}

export { insertTempInDom };