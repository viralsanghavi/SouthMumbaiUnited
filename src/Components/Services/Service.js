import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import "./Services.css";

const Service = ({ title, description }) => {
  return (
    <Card>
      <CardImg top width="200px" src={description} alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          Card subtitle
        </CardSubtitle>
        <CardText>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </CardText>
        <Button>Read More...</Button>
      </CardBody>
    </Card>
  );
};

export default Service;
