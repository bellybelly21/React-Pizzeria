import React, { useState } from 'react';
import { Form, Row, Col, Button, Alert, Navbar } from 'react-bootstrap';
import NavbarComponent  from './assets/componentes/Navbar';
import Footer from './assets/componentes/Footer';

function Login() {
    const [validated, setValidated] = useState(false);
    const [passwordsValid, setPasswordsValid] = useState(true);
    const [loginSuccess, setLoginSuccess] = useState(false);
  
    // Función para validar la contraseña
    const validatePassword = (password) => {
      const numberCount = (password.match(/\d/g) || []).length;
      return password.length >= 6 && numberCount >= 3;
    };
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      event.preventDefault();
      event.stopPropagation();
  
      const password = form.password.value;
  
      // Validación del formulario
      if (form.checkValidity() === false || !validatePassword(password)) {
        setValidated(true);
        setPasswordsValid(false);
        setLoginSuccess(false);
        return;
      }
  
      setPasswordsValid(true);
      setValidated(true);
      setLoginSuccess(true);
    };
  
    return (
      <div>
        <NavbarComponent />
        <div className="container mt-5 pt-5 mb-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h2 className="text-center mb-4">Inicia sesión</h2>
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
                  <Form.Group as={Col} md="12" controlId="password">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      required
                      type="password"
                      placeholder="Ingrese su contraseña"
                      minLength={6}
                      name="password"
                    />
                    <Form.Control.Feedback type="invalid">
                      Contraseña incorrecta (Debe tener al menos 6 caracteres y 3 números)
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
  
                {!passwordsValid && (
                  <Alert variant="danger">
                    La contraseña no cumple con los requisitos (6 caracteres y al menos 3 números).
                  </Alert>
                )}
  
                <Button type="submit" variant="primary" className="w-100 mt-3">
                  Iniciar sesión
                </Button>
              </Form>
              {loginSuccess && (
                <Alert variant="success" className="mt-3">
                  ¡Sesión iniciada con éxito!
                </Alert>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
export default Login
