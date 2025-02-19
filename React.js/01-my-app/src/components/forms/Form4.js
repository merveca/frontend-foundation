import React, { useState } from "react";
import { Container, Form, Row, Col, Button, Alert } from "react-bootstrap";

const Form4 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Şifreler uyuşmuyor!");
      return;
    }
    setSuccess("Kayıt başarılı! Hoş geldiniz.");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={5}>
          {success && <Alert variant="success">{success}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Kullanıcı Adı</Form.Label>
              <Form.Control
                type="text"
                placeholder="Kullanıcı adınızı giriniz"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Şifre</Form.Label>
              <Form.Control
                type="password"
                placeholder="Şifrenizi giriniz"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="confirmPassword">
              <Form.Label>Şifre Onayı</Form.Label>
              <Form.Control
                type="password"
                placeholder="Şifrenizi tekrar giriniz"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="success" type="submit">
              Kayıt Ol
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Form4;
