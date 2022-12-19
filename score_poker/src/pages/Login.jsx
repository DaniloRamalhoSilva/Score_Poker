import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { fetchCreatToken } from '../services/API';

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
        if (response.data.message === 'invalid login or password') setIsError(response.data);
        if (response.data.message === 'Some required fields are missing') setIsError(response.data);
      });
  };

  function handleSubmit(event) {
    event.preventDefault();

    fetchData();
  }

  return (
    <div>
      <h4>LOGIN</h4>
      <div className="login-container">
        <form onSubmit={handleSubmit} className="form">
          <div className="name">
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

          </div>
          <button type="submit">Logar</button>
        </form>
      </div>
      {isError && (
        <Alert variant="danger" onClose={() => { setIsError(false); setName(''); setPassword(''); }} dismissible>
          <Alert.Heading>{isError.message}</Alert.Heading>
        </Alert>
      ) }
    </div>

  );
}

export default Login;
