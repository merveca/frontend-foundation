import React, { useContext, useState } from "react";
import {
  Container,
  FormControl,
  InputGroup,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { StoreContext } from "../../store";
const Content = () => {
  const [usd, setUsd] = useState(0);
  const [tl, setTl] = useState(0);
  const contex = useContext(StoreContext);
  const kurlar = contex.kurlar;

  const cevir = () => {
    const tlDeger = (usd / kurlar.USD).toFixed(2);
    setTl(tlDeger);
  };
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <InputGroup className="mb-3">
            <FormControl
              type="number"
              value={usd}
              onChange={(e) => setUsd(e.target.value)}
            />
            <InputGroup.Text>$</InputGroup.Text>
            <Button
              variant="outline-secondary"
              id="button-addon2"
              onClick={cevir}
            >
              TL'ye çevir
            </Button>
          </InputGroup>
        </Col>
        <Col xs={12}>
          <h3 className="text-center">{tl}₺</h3>
        </Col>
      </Row>
    </Container>
  );
};
export default Content;
