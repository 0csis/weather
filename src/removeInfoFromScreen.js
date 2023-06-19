function removeInfoFromScreen() {
  const day = document.querySelector('.day'); 
  const restOfDays = document.querySelector('.restOfDays');
  const locationDom = document.querySelector('.locationDom');
  locationDom.remove();
  while (day.hasChildNodes()) {
    day.removeChild(day.firstChild);
  }
  while (restOfDays.hasChildNodes()) {
    restOfDays.removeChild(restOfDays.firstChild);
  }
}

export { removeInfoFromScreen };