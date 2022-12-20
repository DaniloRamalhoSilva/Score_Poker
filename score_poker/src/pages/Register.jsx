import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { fetchCreateUser } from '../services/API';
import AlertM from '../components/Alert';
import Navigationbar from '../components/Navigationbar';

import './CSS/register.css';

function Register() {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [fildError, setFildError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [exitWEarning, setExitWEarning] = useState(false);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [image, setImage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (password !== confirmation) {
      setFildError({ message: 'Senhas diferentes' });
      setConfirmation('');
    } else {
      fetchCreateUser(
        { name, password, image },
      ).then((res) => {
        console.log(res);
        setId(res.data.id);
        setIsSuccess({ message: 'Successfully changed' });
      }).catch(({ response }) => {
        if (response === undefined) return setIsError({ message: 'Sem conexão com banco de dados' });
        if (response.data.message === 'Some required fields are missing') return setFildError(response.data);
        if (response.data.message === 'User already registered') return setFildError(response.data);
        return setIsError({ message: 'unexpected error' });
      });
    }
  }

  return (
    <div>
      <Navigationbar textHeader="Cadastro" />
      <form onSubmit={handleSubmit}>
        <Container className="containerRegister">
          <fieldset>
            <legend>Cadastro de Jogador</legend>
            <label htmlFor="name">
              Usuario:
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                placeholder="Digite seu usuário"
                onChange={({ target }) => { setName(target.value); setIsError(false); }}
              />
            </label>
            <label htmlFor="image">
              Foto:
              <input
                type="text"
                id="image"
                name="image"
                value={image}
                placeholder="Digite sua URL da imagem"
                onChange={({ target }) => setImage(target.value)}
              />
            </label>
            <label htmlFor="password">
              Senha:
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="Digite seu password"
                onChange={({ target }) => setPassword(target.value)}
              />
            </label>
            <label htmlFor="confirmation">
              <input
                type="password"
                id="confirmation"
                name="confirmation"
                value={confirmation}
                placeholder="Confirme sua senha"
                onChange={({ target }) => setConfirmation(target.value)}
              />
            </label>
          </fieldset>
        </Container>
        <Container className="d-grid gap-2 mt-3 mb-2">
          <hr />
          <Button
            type="submit"
            variant="dark"
          >
            Salvar
          </Button>
          <Button
            type="button"
            onClick={() => setExitWEarning({ message: 'Jogador não foi cadastrado' })}
            variant="dark"
          >
            Sair
          </Button>
        </Container>
      </form>
      <AlertM message={fildError.message} func={() => setFildError(false)} type="Warning" isTrue={fildError} />
      <AlertM message={isSuccess.message} func={() => navigate(`/perfil/${id}`)} type="Success" isTrue={isSuccess} />
      <AlertM message={exitWEarning.message} func={() => navigate('/')} type="Warning" isTrue={exitWEarning} />
      <AlertM message={isError.message} func={() => navigate('/')} type="Warning" isTrue={isError} />
    </div>

  );
}

export default Register;
