import React from "react";
import { Card, CardBody } from "reactstrap";
import "./Services.css";

const Service = ({ title, description }) => {
  return (
    <Card className="service__card">
      <img className="service__image" src={description} alt="Card i cap" />
      <CardBody>
        <h5 tag="h5" className="title__font">
          {title}
        </h5>
      </CardBody>
    </Card>
  );
};

export default Service;
