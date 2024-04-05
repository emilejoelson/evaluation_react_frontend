
import axios from 'axios';
import { API_BASE_URL } from '../core/constant';

 const APIProvider = axios.create({
  baseURL: API_BASE_URL
});

export  {APIProvider};