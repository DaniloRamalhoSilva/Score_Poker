import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { fetchCGetAllOpen } from '../services/API';

import Navigationbar from '../components/Navigationbar';
import AlertM from '../components/Alert';

import './CSS/tableCard.css';
import GrideHistoriTables from '../components/GridHistoriTables';

function OpenTable() {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [tableOpen, setTableOpen] = useState([]);
  const [selecionado, setSelecionado] = useState();

  useEffect(() => {
    const fetchData = () => {
      fetchCGetAllOpen()
        .then(({ data }) => {
          setTableOpen(data);
        }).catch(({ response }) => {
          if (response === undefined) return setIsError({ message: 'Sem conexão com banco de dados' });
          if (response.data.message === 'Expired or invalid token') return setIsError(response.data);
          if (response.data.message === 'Token not found') return navigate('/login');
          return setIsError({ message: 'unexpected error' });
        });
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navigationbar show textHeader="Familia do Poker" />
      <AlertM message={isError.message} func={() => navigate('/login')} type="Warning" isTrue={isError} />
      <Container className="title">
        <h1>Mesas Abertas</h1>
      </Container>
      <GrideHistoriTables
        selectPlayer={setSelecionado}
        selecionado={selecionado}
        tables={tableOpen}
      />
      <Container className="d-grid gap-2 mt-2 mb-3">
        <Button type="button" onClick={() => navigate(`/table/${selecionado}/match/podium`)} variant="dark">
          <img className="icon" alt="" src="/copas.png" />
          Continuar
          <img className="icon" alt="" src="/copas.png" />
        </Button>
      </Container>
    </div>
  );
}

export default OpenTable;
