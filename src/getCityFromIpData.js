import { getIpData } from './getIpData';

async function getCityFromIpData() {
  try {
    const cityName = await getIpData();
    return cityName.city;
  } catch(error) {
    return 'error';
  }
}

export { getCityFromIpData };