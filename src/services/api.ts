import axios from 'axios';

const endpoint = process.env.REACT_APP_API_ENDPOINT;
export const getCharacters = () => {
  return axios.get(`${endpoint}/characters`).then((r) => r.data);
};
