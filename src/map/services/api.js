import axios from 'axios';

export const getMapsRequest = () => axios.get(`${global.ROOT_URL}/api/maps`);

export const addMapRequest = str =>
  axios.post(`${global.ROOT_URL}/api/maps`, {
    Text: str,
  });

export const removeMapRequest = id =>
  axios.delete(`${global.ROOT_URL}/api/maps/${id}`);
