import React from 'react';
import propTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';

function AlertM({ message }) {
  const navigate = useNavigate();

  return (
    <Alert variant="danger" onClose={() => navigate('/login')} dismissible>
      <Alert.Heading>{message}</Alert.Heading>
    </Alert>
  );
}

AlertM.propTypes = {
  message: propTypes.string.isRequired,
};

export default AlertM;
