import axios from 'axios';

const baseUrl = 'https://restcountries.com/v3.1';

const getCountries = (search) => {
  console.log(search)
  const request = axios.get(`${baseUrl}/name/${search}`);
  return request.then(res => res.data);
}

export default { getCountries }