import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { fetchGetConfig, fetchCreateConfig, fetchUpDate } from '../services/API';
import AlertM from '../components/Alert';
import Navigationbar from '../components/Navigationbar';

import './CSS/settings.css';
import ScoreAppProvider from '../context/ScoreAppProvider';

function Settings() {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [fildError, setFildError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [exitWEarning, setExitWEarning] = useState(false);
  const [nameBtn, setNameBtn] = useState('Editar');

  const [pointsFirst, setPointsFirst] = useState(10);
  const [pointsSecond, setPointsSecond] = useState(5);
  const [pointsThird, setPointsThird] = useState(2);
  const [minUsers, setMinUsers] = useState(3);

  const { setConfif } = useContext(ScoreAppProvider);

  const setVar = (res) => {
    setPointsFirst(res.data.pointsFirst);
    setPointsSecond(res.data.pointsSecond);
    setPointsThird(res.data.pointsThird);
    setMinUsers(res.data.minUsers);
    setConfif({
      pointsFirst, pointsSecond, pointsThird, minUsers,
    });
  };

  useEffect(() => {
    const createConfig = () => {
      fetchCreateConfig({
        pointsFirst, pointsSecond, pointsThird, minUsers,
      }).then((res) => {
        setVar(res);
        setIsSuccess({ message: 'Foi aplicado uma configuração padrão, com sucesso!' });
      }).catch(({ response }) => {
        if (response.data.message === 'Some required fields are missing') return setFildError(response.data);
        return setIsError({ message: 'unexpected error' });
      });
    };

    const fetchData = () => {
      fetchGetConfig()
        .then((res) => {
          setVar(res);
        }).catch(({ response }) => {
          if (response === undefined) return setIsError({ message: 'Sem conexão com banco de dados' });
          if (response.data.message === 'Expired or invalid token') return setIsError(response.data);
          if (response.data.message === 'Token not found') return navigate('/login');
          if (response.data.message === 'Register does not exist') return createConfig();
          return setIsError({ message: 'unexpected error' });
        });
    };

    fetchData();
  }, []);

  const toSave = () => {
    fetchUpDate({
      pointsFirst, pointsSecond, pointsThird, minUsers,
    }).then((res) => {
      setVar(res);
      setIsSuccess({ message: 'Successfully changed' });
      setIsDisabled(true);
      setNameBtn('Editar');
    }).catch(({ response }) => {
      if (response === undefined) return setIsError({ message: 'Sem conexão com banco de dados' });
      if (response.data.message === 'Some required fields are missing') return setFildError(response.data);
      return setIsError({ message: 'unexpected error' });
    });
  };

  const toEdit = () => {
    setIsDisabled(false);
    setIsSuccess(false);
    setNameBtn('Salvar');
  };

  const exit = () => {
    if (nameBtn === 'Salvar') {
      return setExitWEarning({
        message: 'As alteraçoes não foram salvas',
      });
    }
    return navigate('/');
  };

  function handleSubmit(event) {
    event.preventDefault();

    if (nameBtn === 'Salvar') toSave();
    if (nameBtn === 'Editar') toEdit();
  }

  return (
    isError ? (
      <AlertM message={isError.message} func={() => navigate('/login')} type="Warning" isTrue={isError} />
    ) : (
      <div>
        <Navigationbar textHeader="Configuração" show={false} />
        <form onSubmit={handleSubmit}>
          <Container className="containerFild">
            <fieldset>
              <legend>Pontuação do podio</legend>
              <label htmlFor="pointsFirst">
                <input
                  type="number"
                  id="pointsFirst"
                  name="pointsFirst"
                  value={pointsFirst}
                  disabled={isDisabled}
                  onChange={({ target }) => {
                    setPointsFirst(Number(target.value)); setIsError(false);
                  }}
                />
                Pontos 1º Lugar
              </label>
              <label htmlFor="pointsSecond">
                <input
                  type="number"
                  id="pointsSecond"
                  name="pointsSecond"
                  value={pointsSecond}
                  disabled={isDisabled}
                  onChange={({ target }) => {
                    setPointsSecond(Number(target.value)); setIsError(false);
                  }}
                />
                Pontos  2º Lugar
              </label>
              <label htmlFor="pointsThird">
                <input
                  type="number"
                  id="pointsThird"
                  name="pointsThird"
                  value={pointsThird}
                  disabled={isDisabled}
                  onChange={({ target }) => {
                    setPointsThird(Number(target.value)); setIsError(false);
                  }}
                />
                Pontos  3º Lugar
              </label>
            </fieldset>

            <fieldset>
              <hr />
              <legend>Minimo de participantes por mesa</legend>
              <label htmlFor="minUsers">
                <input
                  type="number"
                  id="minUsers"
                  name="minUsers"
                  value={minUsers}
                  disabled={isDisabled}
                  onChange={({ target }) => {
                    setMinUsers(Number(target.value)); setIsError(false);
                  }}
                />
                Nº Participantes
              </label>

            </fieldset>

          </Container>
          <Container className="d-grid gap-2 mt-3 mb-2">
            <hr />
            <Button
              type="submit"
              variant="dark"
            >
              {nameBtn}
            </Button>
            <Button
              type="button"
              onClick={exit}
              variant="dark"
            >
              Sair
            </Button>
          </Container>
        </form>
        <AlertM message={(fildError) ? fildError.message : ''} func={() => setFildError(false)} type="Warning" isTrue={fildError} />
        <AlertM message={(isSuccess) ? isSuccess.message : ''} func={() => setIsSuccess(false)} type="Success" isTrue={isSuccess} />
        <AlertM message={(exitWEarning) ? exitWEarning.message : ''} func={() => navigate('/')} type="Warning" isTrue={exitWEarning} />
      </div>
    )
  );
}

export default Settings;
