function insertLocationInDom(city, country) {
  const header = document.querySelector('header');
  const locationDom = document.createElement('div');
  locationDom.classList.add('locationDom');
  locationDom.textContent = `${city}, ${country}`;
  header.appendChild(locationDom);
}

export { insertLocationInDom };
