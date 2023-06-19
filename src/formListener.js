import { removeInfoFromScreen } from './removeInfoFromScreen';
import { processAndReturnSelectedDayData } from './processAndReturnSelectedDayData';

function formListener() {
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    removeInfoFromScreen();
    
    const location = document.querySelector('#location').value;
    processAndReturnSelectedDayData('C', location);
    form.reset();
  })
}

export { formListener };