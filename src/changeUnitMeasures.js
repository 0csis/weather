import { removeInfoFromScreen } from './removeInfoFromScreen';
import { processAndReturnSelectedDayData } from './processAndReturnSelectedDayData';

function changeUnitMeasures(location) {
  const otherTemp = document.querySelector('.otherTemp');
  otherTemp.addEventListener('click', () => {
    removeInfoFromScreen();
    if (otherTemp.textContent == '°F') {
      processAndReturnSelectedDayData('F', location);
    } else {
      processAndReturnSelectedDayData('C', location);
    }
  })
}

export { changeUnitMeasures };