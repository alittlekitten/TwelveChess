import axios from 'axios';
import { BACK_BASE_URL } from '../constant';

export const roomsAPI = (roomCode) => {
  return axios.get(`http://${BACK_BASE_URL}/api/v1/test/rooms/${roomCode}`);
};
