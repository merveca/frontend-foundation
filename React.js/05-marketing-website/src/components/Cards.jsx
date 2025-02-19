import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function Cards({ buttontext, link, images }) {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={images} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </Card.Text>
        <Button variant="primary" as={Link} to={link}>
          {buttontext}
        </Button>
      </Card.Body>
    </Card>
  );
}
Cards.propTypes = {
  buttontext: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
};
export default Cards;
