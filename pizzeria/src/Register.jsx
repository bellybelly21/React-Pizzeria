import React, { useState } from 'react';
import { Form, Row, Col, Button, Alert, Navbar } from 'react-bootstrap';
import NavbarComponent  from './assets/componentes/Navbar';
import Footer from './assets/componentes/Footer';

function Register() {
  const [validated, setValidated] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [passwordsValid, setPasswordsValid] = useState(true);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  // Función para validar la contraseña
  const validatePassword = (password) => {
    const numberCount = (password.match(/\d/g) || []).length;
    return numberCount >= 3;
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    // Validación del formulario
    if (form.checkValidity() === false) {
      setValidated(true);
      setRegistrationSuccess(false);
      return;
    }

    // Validación de contraseñas
    const password1 = form.password1.value;
    const password2 = form.password2.value;

    if (password1 !== password2) {
      setPasswordsMatch(false);
      setPasswordsValid(true);
      setRegistrationSuccess(false);
      return;
    }

    if (!validatePassword(password1)) {
      setPasswordsValid(false);
      setPasswordsMatch(true);
      setRegistrationSuccess(false);
      return;
    }

    setPasswordsMatch(true);
    setPasswordsValid(true);
    setValidated(true);
    setRegistrationSuccess(true);
  };

  return (
    <div>
    <NavbarComponent />
    <div className="container mt-5 pt-5 mb-5 pb-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Registro de Usuario</h2>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Ingrese su correo electrónico"
                />
                <Form.Control.Feedback type="invalid">
                  Correo inválido
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="password1">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Ingrese su contraseña"
                  minLength={6}
                  name="password1"
                />
                <Form.Control.Feedback type="invalid">
                  Contraseña inválida (6 caracteres mínimo y al menos 3 números)
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="password2">
                <Form.Label>Repetir Contraseña</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Repita su contraseña"
                  minLength={6}
                  name="password2"
                />
                <Form.Control.Feedback type="invalid">
                Contraseña inválida (6 caracteres mínimo y al menos 3 números)
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            {!passwordsMatch && (
              <Alert variant="danger">
                Las contraseñas no coinciden
              </Alert>
            )}

            {!passwordsValid && (
              <Alert variant="danger">
                La contraseña no tiene 3 números (requerido)
              </Alert>
            )}

            <Button type="submit" variant="primary" className="w-100 mt-3">
              Registrar
            </Button>
            {registrationSuccess && (
              <Alert variant="success" className="mt-3">
                Registrado con éxito!
              </Alert>
            )}
          </Form>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default Register;
