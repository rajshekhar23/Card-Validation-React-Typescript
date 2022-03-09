import {  BALANCE_URL } from '../constants/urls';
import FetchAPI from './FetchAPI';

// fetched data using async and await as mentioned.
const FrontEndAPI = {
  getUserBalance: async () => {
    const balance: number = await FetchAPI.get(BALANCE_URL);
    return balance;
  },
  addCharge: async () => {
    const response: any = await FetchAPI.post(BALANCE_URL);
    return response;
  },
};

export default FrontEndAPI;
