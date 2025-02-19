import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import people from "./data";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }

    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }

    setIndex(checkNumber(randomNumber));
  };
  return (
    <Container className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>​
      </div>
      ​
      <div className="button-container">
        <Button className="prev-btn" onClick={prevPerson}>
          prev
        </Button>
        <Button className="next-btn" onClick={nextPerson}>
          next
        </Button>
        ​
      </div>
      <Button className="random-btn" onClick={randomPerson}>
        surprise me
      </Button>
    </Container>
  );
};

export default Review;
