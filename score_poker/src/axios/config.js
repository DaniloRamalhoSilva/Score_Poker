import axios from 'axios';

const scoreFetch = axios.create({
  baseURL: 'http://localhost:5180',
});

export default scoreFetch;
