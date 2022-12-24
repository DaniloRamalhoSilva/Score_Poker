import scoreFetch from '../axios/config';
import { getToken, saveToken } from './localStorage';

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

export const fetchCreateUser = async (body) => {
  const user = await scoreFetch.post('/user', body, {
    headers: getToken(),
  });
  return user;
};

export const fetchGetUser = async (id) => {
  const user = await scoreFetch.get(`/user/${Number(id)}`, {
    headers: getToken(),
  });
  return user;
};

export const fetchGetAllPlayers = async () => {
  const user = await scoreFetch.get('/user', {
    headers: getToken(),
  });
  return user;
};

export const fetchFindOverallRating = async () => {
  const rank = await scoreFetch.get('/table', {
    headers: getToken(),
  });
  return rank;
};

export const fetchCreateTable = async () => {
  const table = await scoreFetch.post('/table', {}, {
    headers: getToken(),
  });
  return table;
};

export const fetchCreateMatch = async (id, userIdFirst, userIdSecond, userIdThird, userIds) => {
  const match = await scoreFetch.post(`table/${id}/match/podium`, {
    userIdFirst, userIdSecond, userIdThird, userIds,
  }, {
    headers: getToken(),
  });
  return match;
};

export const fetchGetMatch = async (id) => {
  const match = await scoreFetch.get(`table/${id}/match/podium`, {
    headers: getToken(),
  });
  return match;
};

export const fetchCloseMatch = async (id) => {
  const match = await scoreFetch.get(`table/${id}`, {
    headers: getToken(),
  });
  return match;
};
