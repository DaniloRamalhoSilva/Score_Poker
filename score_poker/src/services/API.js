import scoreFetch from '../axios/config';
import { getToken, saveToken } from './localStorage';

export const fetchFindOverallRating = async () => {
  const rank = await scoreFetch.get('/table', {
    headers: getToken(),
  });
  return rank;
};

export const fetchCreatToken = async (name, password) => {
  const { data } = await scoreFetch.post('/login', { name, password });
  saveToken(data);
  return data;
};

export const fetchGetConfig = async () => {
  const config = await scoreFetch.get('/config', {
    headers: getToken(),
  });
  return config;
};

export const fetchCreateConfig = async (body) => {
  const config = await scoreFetch.post('/config', body, {
    headers: getToken(),
  });
  return config;
};

export const fetchUpDate = async (body) => {
  const config = await scoreFetch.put('/config', body, {
    headers: getToken(),
  });
  return config;
};
