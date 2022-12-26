import React from 'react';
import propTypes from 'prop-types';
import { Container } from 'react-bootstrap';

function GrideHistoriTables({ tables, selectPlayer, selecionado }) {
  return (
    <Container className="containerTable">
      { tables.length !== 0 ? tables.map((table) => {
        const date = new Date(table.creatDate);
        return (
          <babel
            className={(Number(selecionado) === Number(table.id)) ? 'select cardTable' : 'cardTable'}
            onClick={({ target }) => selectPlayer(target.id)}
            htmlFor={table.id}
            id={table.id}
          >
            <h4 id={table.id}>{`Mesa #${table.id}`}</h4>
            <img id={table.id} src="/mesa.png" alt="" />
            <span id={table.id}>{`Aberta em: ${date.toLocaleDateString()}`}</span>
          </babel>

        );
      }) : (
        <Container>
          <p>Nenhum mesa encontrada</p>
        </Container>
      )}
    </Container>
  );
}

GrideHistoriTables.propTypes = {
  tables: propTypes.arrayOf(
    propTypes.shape().isRequired,
  ).isRequired,
  selectPlayer: propTypes.func.isRequired,
  selecionado: propTypes.number.isRequired,
};
export default GrideHistoriTables;
