import React from "react";
import { SERVICES } from "../../utils/constants";
import Service from "./Service";
import "./Services.css";

const Services = () => {
  return (
    <div className="servicePage">
      <h1 className="text-center">OUR SERVICES</h1>
      <div className="services">
        {SERVICES.map((service, index) => (
          <Service
            key={index}
            title={service.serve}
            description={service.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
