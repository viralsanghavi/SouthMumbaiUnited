import React from "react";
import { Container } from "reactstrap";
import Youtube from "../gallery/Youtube";
import { FaYoutube } from "react-icons/fa";
import "./Home.css";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="hero__container">
          <Slider />
        </div>
        <Services />
        <div className="home__poster">
          <a
            href="https://www.youtube.com/channel/UCwDxrXhDmDHehSDbo76RWCg"
            rel="noopener noreferrer"
            target="_blank"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h1 className="home__youtubeLink">
              YouTube.com/South Mumbai United Football Club{" "}
              <FaYoutube color="red" size={55} />
            </h1>
          </a>
        </div>
        <Container fluid className="home__youtube">
          <Youtube />
        </Container>
      </div>
    );
  }
}
export default Home;
