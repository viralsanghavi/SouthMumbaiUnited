import React from "react";
import {
  Card,
  // Button,
  CardImg,
  CardTitle,
  // CardText,
  // CardSubtitle,
  CardBody,
} from "reactstrap";
import "./Services.css";

const Service = ({ title, description }) => {
  return (
    <Card className="service__card">
      <CardImg
        top
        width="100%"
        className="service__image"
        src={description}
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle tag="h5" className="title__font">
          {title}
        </CardTitle>
      </CardBody>
    </Card>
  );
};

export default Service;
