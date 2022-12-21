import React, { useState } from 'react';
import AlertM from '../components/Alert';
import Navigationbar from '../components/Navigationbar';

import './CSS/perfil.css';

function Perfil() {
  const [isError, setIsError] = useState(false);

  return (
    <div>
      <Navigationbar textHeader="Perfil jogador" show />
      <AlertM message="Pagina em Manutenção" func={() => setIsError(false)} type="Warning" isTrue={isError} />
      <h1>Em manutenção</h1>
    </div>
  );
}

export default Perfil;
