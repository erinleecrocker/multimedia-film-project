import React from "react";
import "./ProfileSm.css";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { propTypes } from "react-bootstrap/esm/Image";

const ProfileSm = (props) => {
  return (
    <Card className="profile-card">
      <Card.Img className="card-image" variant="top" src="../../images/ponsovan_light.jpg"/>
      <Card.Body>
        <Card.Title>Name {props.name} </Card.Title>
        <Card.Text>
          Description (small)
          {props.smallDescription}
        </Card.Text>
      </Card.Body>
      {/* <ListGroup className="list-group-flush">
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup> */}
      <Card.Body className="card-button-section">
        <Card.Link href="#">Learn More</Card.Link>
        {/* <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
  );
};

export default ProfileSm;
