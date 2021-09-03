import React from "react";
import { TwitterTimelineEmbed, TwitterFollowButton } from "react-twitter-embed";
import { Container, Row, Col, Card, Spinner, Alert } from "reactstrap";
import Youtube from "../gallery/Youtube";
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import "./Home.css";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";
import Facebook from "../Social Media/Facebook";
// import { PushPlayer } from "./Players/PushPlayer";

class Home extends React.Component {
  render() {
    const spinner = () => {
      return <Spinner color="dark" type="grow" className="feed__loader" />;
    };

    return (
      <div className="home">
        {/* <Slider /> */}
        <div className="hero__container">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/reactsmu.appspot.com/o/Hero%2FIMG_0803.JPG?alt=media&token=16aaf8bf-77a9-4b83-905a-4596438a338c"
            alt="hero"
            className="home__hero"
          />
        </div>
        <Services />
        <div className="home__voilence">
          <div className="home__voilenceCard">
            <img
              className="home__voilenceCardImg"
              loading="lazy"
              src="https://i.pinimg.com/originals/ef/2c/53/ef2c53177489744f2739b4a5acfadc99.jpg"
              alt="Vegan"
            />
          </div>
          <div className="home__voilenceDetail">
            <h1>Initiative</h1>
            <p>
              Be it killing of animals for food , commercial products , clothes
              or using animals in the dairy industry. The torture an Animal goes
              though is the same. Animal agriculture &amp; Deforestation done
              for it has a massive impact on climate change. Lets all be
              empathetic towards all the biodiversity on our planet. Lets Save
              our planet before its too late. South mumbai united proudly
              supports
              <br />
            </p>
            <Alert color="light" className="text-left">
              <strong>
                #SayNoToDeforestation #SayNoToAnimalViolence #GoVegan
                #ClimateChangeAwareness #SayNoToSpeciesism
              </strong>
            </Alert>
          </div>
        </div>

        <div className="home__poster">
          <h1 className="home__youtubeLink">
            South Mumbai United Football Club | Social Media{" "}
            <FaFacebook color="#4267b2" className="mr-2" />
            <FaInstagram color="#c13584" className="mr-2" />
            <FaTwitter color="#00acee" />{" "}
          </h1>
        </div>

        <Container fluid className="home__inst">
          <Row className="p-4 center__feed">
            <Card className="home__twitterCard">
              <Col className="home__twitter">
                <Facebook />
              </Col>
            </Card>
            <Card className="home__twitterCard">
              <Col className="home__twitter">
                <TwitterFollowButton
                  screenName={"fc_smu"}
                  className="twitter__button"
                  size={"large"}
                />
                <TwitterTimelineEmbed
                  SameSite="None"
                  className="object-contain"
                  sourceType="profile"
                  screenName="fc_smu"
                  placeholder={spinner()}
                  noHeader
                  noFooter
                  options={{ height: "450px" }}
                />
              </Col>
            </Card>
          </Row>
        </Container>

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
