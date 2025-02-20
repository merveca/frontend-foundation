import React from 'react';
import { Card, Button } from "react-bootstrap";

const Product = (props) => {
  const { title, price, desc, image } = props;

  return (
    <Card>
      <Card.Img
        variant="top"
        src={require(`../../assets/img/${image}`).default}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Card.Text>${price}</Card.Text>
        <Button variant="warning">Add Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
