import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import UserCard from "./UserCard";

const UserCards = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.github.com/users")
      .then((resp) => resp.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <Container className="mt-4">
      <Row className="g-4">
        <Spinner
          animation="border"
          variant="primary"
          className={loading ? "d-block" : "d-none"}
        />
        {users.map((user) => {
          return (
            <Col key={user.id} sm={6} md={4} lg={2}>
              <UserCard
                image={user.avatar_url}
                name={user.login}
                url={user.html_url}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default UserCards;
