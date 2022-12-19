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
