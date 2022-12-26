import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { fetchCreatToken } from '../services/API';
import AlertM from '../components/Alert';
import imgLogin from '../../public/login.png';

import './CSS/login.css';

function Login() {
  const [isError, setIsError] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
  }, []);

  const fetchData = () => {
    fetchCreatToken(name, password)
      .then(() => {
        navigate('/');
      })
      .catch(({ response }) => {
        if (response === undefined) return setIsError({ message: 'Sem conexão com banco de dados' });
        if (response.data.message === 'invalid login or password') return setIsError(response.data);
        if (response.data.message === 'Some required fields are missing') return setIsError(response.data);
        return setIsError({ message: 'unexpected error' });
      });
  };

  function handleSubmit(event) {
    event.preventDefault();

    fetchData();
  }

  return (
    <Container className="containerLogin">
      <img src={imgLogin} alt="" />
      <h1>LOGIN</h1>
      <div className="login-container">
        <form onSubmit={handleSubmit} className="form">
          <Container className="containerLabels">
            <label htmlFor="name">
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                placeholder="Digite seu usuário"
                onChange={({ target }) => { setName(target.value); setIsError(false); }}
              />
            </label>
            <label htmlFor="password">
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="Digite seu password"
                onChange={({ target }) => setPassword(target.value)}
              />
            </label>

          </Container>
          <Container className="d-grid gap-2 mt-3 mb-2">
            <Button type="submit" variant="dark">Logar</Button>
          </Container>
        </form>
      </div>
      <AlertM message={isError.message} func={() => { setIsError(false); setName(''); setPassword(''); }} type="Danger" isTrue={isError} />

    </Container>
  );
}

export default Login;
