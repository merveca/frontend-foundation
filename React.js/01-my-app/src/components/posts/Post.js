import React from 'react';
import { Card } from "react-bootstrap";

const Post = (props) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <h2>{props.baslik}</h2>
        <p>{props.mesaj}</p>
      </Card.Body>
    </Card>
  );
};

export default Post;
