import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const NoteForm = (props) => {
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const yeniNote = {
      id: Date.now(),
      note: note,
    };

    props.ekle(yeniNote);
    setNote("");
  };

  return (
    <div style={{ backgroundColor: "#efefef", padding: "1rem" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Notunuzu giriniz</Form.Label>
          <Form.Control
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </Form.Group>

        <Button variant="warning" type="submit">
          Ekle
        </Button>
      </Form>
    </div>
  );
};

export default NoteForm;
