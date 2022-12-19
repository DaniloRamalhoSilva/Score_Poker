const getToken = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  return token;
};

const saveToken = (token) => {
  localStorage.setItem('token', JSON.stringify({ Authorization: token }));
};

export {
  getToken,
  saveToken,
};
