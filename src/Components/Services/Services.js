import React from "react";
import { CardDeck } from "reactstrap";
import { SERVICES } from "../../utils/constants";
import Service from "./Service";
import "./Services.css";

const Services = () => {
  return (
    <div className="servicePage">
      <h1 className="text-center">OUR SERVICES</h1>
      <div className="services">
        <CardDeck>
          {SERVICES.map((service, index) => (
            <Service
              key={index}
              title={service.serve}
              description={service.img}
            />
          ))}
        </CardDeck>
      </div>
    </div>
  );
};

export default Services;
