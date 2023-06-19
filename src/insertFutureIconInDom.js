function insertFutureIconInDom(elementClass, icon) {
  const div = document.querySelector(`.${elementClass}`);
  const iconDom = document.createElement('img');
  iconDom.src = "https://" + icon;
  div.appendChild(iconDom);
}

export { insertFutureIconInDom };