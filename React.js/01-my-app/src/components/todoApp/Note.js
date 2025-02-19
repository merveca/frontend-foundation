import React from 'react';
import { Card, Button } from "react-bootstrap";

const Note = (props) => {
  const { id, note, sil } = props;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{note}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" onClick={() => sil(id)}>
          Sil
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Note;
