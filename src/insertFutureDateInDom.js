import { formatDateToDay } from "./formatDateToDay";

function insertFutureDateInDom(elementClass, date) {
  const div = document.querySelector(`.${elementClass}`);
  const dateDom = document.createElement('div');
  dateDom.classList.add('dateDom');
  dateDom.textContent = `${formatDateToDay(date)}`;
  div.appendChild(dateDom);
}

export { insertFutureDateInDom };