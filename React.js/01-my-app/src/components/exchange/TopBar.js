import React, { useContext } from "react";
import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import { StoreContext } from "../../store";
const TopBar = () => {
  const context = useContext(StoreContext);
  const usd = (1 / context.kurlar.USD).toFixed(2);
  const chf = (1 / context.kurlar.CHF).toFixed(2);
  return (
    // <Navbar bg="primary" expand="lg">
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">Exchange</Navbar.Brand>
        <Nav className="ms-auto">
          <Badge bg="warning" text="dark">
            $
          </Badge>
          {usd} ₺ &nbsp;&nbsp;
          <Badge bg="danger" text="dark">
            €
          </Badge>
          {chf} ₺
        </Nav>
      </Container>
    </Navbar>
  );
};
export default TopBar;
