import React from 'react';
import { Card } from "react-bootstrap";

const UserCard = (props) => {
  const { image, name, url } = props;
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>
          <a href={url} target="_blank">
            {name}
          </a>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
