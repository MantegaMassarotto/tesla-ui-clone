import axios from 'axios';
import IContact from '../interfaces/IContact';

export const send = (contact: IContact) => {
  return new Promise(async (resolve, reject) => {
    try {
      const axiosInstance = axios.create({ baseURL: 'https://narodagem-api.herokuapp.com' });
      const response = await axiosInstance.post('/contact', { ...contact });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  })
}
