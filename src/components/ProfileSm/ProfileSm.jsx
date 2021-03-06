import React from "react";
import "./ProfileSm.css";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const ProfileSm = (props) => {
  return (
    <>
    <Card className="profile-card">

      <Carousel fade pauseOnHover={true}>
        <Carousel.Item>
          <img
            className="d-block w-auto"
            src={props.image}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-auto"
            src={props.image2}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
      {/* <Card.Img className="card-image" variant="top" src={props.image}/> */}
      <Card.Body>
        <Card.Title id="card-title"> {props.name} </Card.Title>
        <Card.Text id="card-text">{props.smallDescription}</Card.Text>
      </Card.Body>
      {/* <ListGroup className="list-group-flush">
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup> */}
      <Card.Body className="card-button-section">
        <Link className="card-link" to={props.link}>
              Watch Interview
            </Link>
        {/* <Card.Link href={props.link}>Watch Interview</Card.Link> */}
        {/* <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
    </>
  );
};

export default ProfileSm;
