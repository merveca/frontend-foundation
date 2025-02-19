import React, { useState } from "react";
import { Container, Form, Row, Col, Button, Alert } from "react-bootstrap";

const Form3 = () => {
  const [age, setAge] = useState("");
  const [rating, setRating] = useState("");
  const [feedback, setFeedback] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setResponse("Anketiniz başarıyla gönderildi. Teşekkürler!");
    setAge("");
    setRating("");
    setFeedback("");
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          {response && <Alert variant="info">{response}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="age">
              <Form.Label>Yaşınız</Form.Label>
              <Form.Control
                type="number"
                placeholder="Yaşınızı giriniz"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="rating">
              <Form.Label>Memnuniyet Puanınız (1-10)</Form.Label>
              <Form.Control
                type="number"
                min="1"
                max="10"
                placeholder="Puanınızı giriniz"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="feedback">
              <Form.Label>Geri Bildiriminiz</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Yorumlarınızı yazınız"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
            </Form.Group>

            <Button variant="warning" type="submit">
              Gönder
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Form3;
