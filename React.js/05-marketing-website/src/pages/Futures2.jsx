// src/pages/Feature1.jsx
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const Futures2 = () => {
  return (
    <Container fluid className="vh-100 d-flex flex-column">
      {/********** HEADER *********** */}
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      {/* ************ CONTENT ********* */}
      <Row className="mt-3 justify-content-center  text-center">
        <Col>
          <h2>Feature 2</h2>
        </Col>
      </Row>
      <Row className="flex-grow-1  justify-content-center align-items-center">
        <Col md={3}>
          <Image
            src="/assets/images/futures2.png"
            fluid
            alt="Feature 2"
            width={300}
            height={400}
          />
        </Col>
        <Col md={3}>
          <b>
            Feature 2 is designed to bring you the best of technology and
            innovation. With cutting-edge performance and unparalleled
            usability, Feature 1 sets a new standard in the industry.
          </b>
          <br />
          <br />
          <ul>
            <li>High performance</li>
            <li>Innovative design</li>
            <li>Seamless integration</li>
          </ul>
          <Button as={Link} to="/contact">
            BUY NOW{" "}
          </Button>
        </Col>
      </Row>

      {/********** FOOTER *********** */}
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export default Futures2;
