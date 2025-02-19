import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import Person from "./Person";
import data from "../../data/persons.json";

const Birthday = () => {
  const [persons, setPersons] = useState(data);

  const temizle = () => {
    setPersons([]);
  };

  const yukle = () => {
    setPersons(data);
  };

  return (
    <Card>
      <Card.Body>
        <h1>Bugün Doğanlar</h1>
        <p>Bugün doğan {persons.length} kişi bulundu</p>

        {persons.map((item) => {
          const { id, image, name, age } = item;
          return <Person image={image} name={name} age={age} key={id} />;
        })}
        <Button variant="danger" onClick={temizle}>
          Temizle
        </Button>

        <Button variant="success" onClick={yukle}>
          Yükle
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Birthday;
