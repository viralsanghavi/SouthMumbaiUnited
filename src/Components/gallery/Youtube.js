import React, { useState } from "react";
import "./Youtube.css";
import { Container } from "reactstrap";

const Youtube = () => {
  const [resultyt] = useState([
    "https://www.youtube.com/embed/jOX-nbRy9kA",
    "https://www.youtube.com/embed/EAQQ6yr6eOg",
    "https://www.youtube.com/embed/SvWO8YGADWQ",
  ]);

  return (
    <Container fluid className="youtube__Card">
      {resultyt.map((links, i) => (
        <div key={i} className="youtube__carding">
          <iframe
            width="560"
            height="315"
            className="frame"
            title={i}
            src={links}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </Container>
  );
};

export default Youtube;
