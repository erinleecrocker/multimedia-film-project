import React from "react";
import "./ProfileLg.css";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { propTypes } from "react-bootstrap/esm/Image";
import Container from "react-bootstrap/Container";

const ProfileLg = (props) => {
  return (
      <div id="imgcontainer">
      <div className="row ml-auto mr-auto justify-content-center">
      <iframe  src={props.videolink} width="1283" height="720" allow="autoplay"></iframe>
      </div>
      </div>
    );
};

export default ProfileLg;
