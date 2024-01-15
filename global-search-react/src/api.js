import axios from 'axios';

export async function fetchCountries() {
  try {
    const res = await axios.get('https://naras-api.vercel.app/all');
    return res.data;
  } catch (e) {
    return [];
  }
}

export async function fetchSearchResults(q) {
  try {
    const res = await axios.get(`https://naras-api.vercel.app/search?q=${q}`);

    return res.data;
  } catch (e) {
    return [];
  }
}

export async function fetchCountry(code) {
  try {
    const res = await axios.get(`https://naras-api.vercel.app/code/${code}`);

    return res.data;
  } catch (e) {
    return null;
  }
}
