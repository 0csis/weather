import { formatDateToDay } from './formatDateToDay';

function insertDateInDom(date) {
  const day = document.querySelector('.day');
  const dateDom = document.createElement('div');
  dateDom.textContent = formatDateToDay(date);
  dateDom.classList.add('dateDom');
  day.appendChild(dateDom);
}

export { insertDateInDom };
