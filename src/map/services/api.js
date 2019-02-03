import axios from 'axios';

export const getMapsRequest = () => axios.get(`${global.ROOT_URL}/api/maps`);
