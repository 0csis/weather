function insertIconInDom(icon) {
  const day = document.querySelector('.day');
  const iconDom = document.createElement('div');
  const img = document.createElement('img');
  img.src = "https://" + icon;
  iconDom.appendChild(img);
  day.appendChild(iconDom);
}

export { insertIconInDom };
