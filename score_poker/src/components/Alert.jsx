import React from 'react';
import propTypes from 'prop-types';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function AlertM({
  message, func, type, isTrue,
}) {
  return (
    <ToastContainer position="middle-center">
      <Toast variant={type.toLowerCase()} bg={type.toLowerCase()} onClose={func} show={isTrue}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">{type}</strong>
          {/* <small className="text-muted"></small> */}
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

/* function AlertM() {
  const navigate = useNavigate();

  return (
    <Alert variant="danger" onClose={() => navigate('/login')} dismissible>
      <Alert.Heading>{message}</Alert.Heading>
    </Alert>
  );
} */

AlertM.propTypes = {
  message: propTypes.string.isRequired,
  func: propTypes.func.isRequired,
  type: propTypes.string.isRequired,
  isTrue: propTypes.bool.isRequired,
};

export default AlertM;
