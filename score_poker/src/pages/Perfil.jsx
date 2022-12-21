import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import AlertM from '../components/Alert';
import Navigationbar from '../components/Navigationbar';
import { fetchGetUser } from '../services/API';

import './CSS/perfil.css';

const AVATAR = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgUNaoFwOOa3sOnMoc8CVUJ65bhS822etxVQ&usqp=CAU';

function Perfil() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isError, setIsError] = useState(false);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [creatDate, setCreatDate] = useState('');

  useEffect(() => {
    const fetchData = () => {
      fetchGetUser(id)
        .then((res) => {
          setName(res.data.name);
          setImage(res.data.image);
          const event = new Date(res.data.creatDate);
          setCreatDate(event.toLocaleDateString());
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
      <Navigationbar textHeader="Perfil jogador" show />
      <AlertM message="Pagina em Manutenção" func={() => setIsError(false)} type="Warning" isTrue={isError} />
      <Container className="containerPerfil">
        <img src={(image) || AVATAR} alt="" />
        <div>
          <h1>{`Bem vindo ao perfil do ${name}`}</h1>
          <p>{`Ativo desde ${creatDate}`}</p>
        </div>
      </Container>
      <Container className="containerEstatisticas">
        <hr />
        <h1>Estatisticas do Jogador</h1>
        <p>Em manutenção</p>
      </Container>

    </div>
  );
}

export default Perfil;
