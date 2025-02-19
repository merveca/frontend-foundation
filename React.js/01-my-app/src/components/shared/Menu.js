import React from 'react';
import { ListGroup, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ListGroup defaultActiveKey="home">
      <ListGroup.Item as={Link} to="/" eventKey="home">
        Homepage
      </ListGroup.Item>
      <ListGroup.Item as={Link} to="/birthday" eventKey="birthday">
        Birthday
      </ListGroup.Item>
      <ListGroup.Item as={Link} to="/bs-classic" eventKey="bs-classic">
        Bootstrap Classic
      </ListGroup.Item>
      <ListGroup.Item as={Link} to="/clock" eventKey="clock">
        Clock
      </ListGroup.Item>
      <ListGroup.Item as={Link} to="/comp" eventKey="comp">
        Comp
      </ListGroup.Item>
      <ListGroup.Item as={Link} to="/counter" eventKey="counter">
        Counter
      </ListGroup.Item>
      <ListGroup.Item as={Link} to="/countries" eventKey="countries">
        Countries
      </ListGroup.Item>
      <ListGroup.Item as={Link} to="/form1" eventKey="form1">
        Form1
      </ListGroup.Item>
      <ListGroup.Item as={Link} to="/form2" eventKey="form2">
        Form2
      </ListGroup.Item>
      <ListGroup.Item as={Link} to="/form3" eventKey="form3">
        Form3
      </ListGroup.Item>
      <ListGroup.Item as={Link} to="/form4" eventKey="form4">
        Form4
      </ListGroup.Item>
      <ListGroup.Item as={Link} to="/posts" eventKey="posts">
        Posts
      </ListGroup.Item>
      <ListGroup.Item as={Link} to="/profile" eventKey="profile">
        Profile
      </ListGroup.Item>
      <ListGroup.Item as={Link} to="/progress" eventKey="progress">
        Progress
      </ListGroup.Item>
      <ListGroup.Item as={Link} to="/random-images" eventKey="randomimg">
        Random Images
      </ListGroup.Item>
      <ListGroup.Item as={Link} to="/shop" eventKey="shop">
        Shop
      </ListGroup.Item>
      <ListGroup.Item as={Link} to="/state" eventKey="state">
        State
      </ListGroup.Item>
      <ListGroup.Item as={Link} to="/useeffect" eventKey="useeffect">
        UseEffect
      </ListGroup.Item>
      <ListGroup.Item as={Link} to="/usercards" eventKey="usercards">
        User Cards
      </ListGroup.Item>
      <ListGroup.Item as={Link} to="/todoapp" eventKey="todoapp">
        ToDo App
      </ListGroup.Item>
      <ListGroup.Item as={Link} to="/exchange" eventKey="exchange">
        Exchange
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Menu;
