import axios from 'axios';
import { baseURL } from '../services/varUteis';

const scoreFetch = axios.create(
  baseURL,
);

export default scoreFetch;
