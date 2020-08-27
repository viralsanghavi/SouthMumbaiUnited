import React from 'react'
import { TwitterTimelineEmbed, TwitterFollowButton } from 'react-twitter-embed';
import { Container, Row, Col, Card, Spinner } from 'reactstrap';
import Youtube from './gallery/Youtube';
import AsNavFor from './gallery/memories';
import { FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa'
import './Home.css'
import Instafeed from './Instafeed';




class Home extends React.Component {

    render() {
        const spinner = () => {
            return (<Spinner color="dark" type="grow" className="feed__loader" />)
        }

        return (
            <div className="home">
                {/* <Container fluid className="home__slider" >
                </Container > */}
                <AsNavFor />
                {/* <div id="slideBg"></div> */}

                {/* 
                <div className="home__quote">
                    <FaQuoteLeft size={55} color={"gray"} />
                    <h1 className="home_quoteOfTheDay">Football is played with the head. Your feet are just the tools.</h1>
                </div> */}


                {/* <div className="home__smuWay">
                    <img src={require("../assets/smuway.jpeg")} />
                </div> */}
                <div className="home__voilence">
                    <div className="home__voilenceCard">
                        <img className="home__voilenceCardImg" src="https://i.pinimg.com/originals/ef/2c/53/ef2c53177489744f2739b4a5acfadc99.jpg" alt="Vegan" />
                    </div>
                    <div className="home__voilenceDetail">
                        <h1>Initiative</h1>
                        <p>Be it killing of animals for food , commercial products , clothes or using animals in the dairy industry. The torture the animal goes through is same.

                        It has a massive impact on on climate change & the  environement as whole through deforestation , emission of green house gases etc.

                        Lets all be empathetic towards every specie living on planet earth.
                        Lets all save our earth & all its species before its too late.


                        South mumbai united proudly supports
                        <br />
                        </p>
                        <p className="text-center">
                            <strong style={{
                                fontFamily: '"Open Sans", sans-serif'
                            }}>

                                #SayNoToDeforestation
                                #SayNoToAnimalViolence
                                #GoVegan
                                #ClimateChangeAwareness
                                #SayNoToSpeciesism
                            </strong>
                        </p>
                    </div>
                </div>

                <div className="home__poster">
                    <h1 className="home__youtubeLink">South Mumbai United Football Club | Social Media <FaInstagram
                        color="#c13584" className="mr-2"
                    /><FaTwitter color="#00acee" /> </h1>
                </div>

                <Container fluid className="home__inst">
                    <Row className="p-4 center__feed" >
                        <Card className="home__twitterCard">
                            <Col className="home__twitter">
                                <TwitterTimelineEmbed SameSite="None" className="object-contain"
                                    sourceType="profile"
                                    screenName="fc_smu"
                                    placeholder={spinner()}
                                    noHeader
                                    noFooter
                                    options={{ height: 400 }}
                                />
                                <TwitterFollowButton
                                    screenName={'fc_smu'}
                                    size={'large'}
                                />
                            </Col>
                        </Card>
                        <Card className="home__twitterCard">
                            <Col className="home__twitter" style={{ marginTop: "0px" }}>
                                <Instafeed />
                            </Col>
                        </Card>
                    </Row>
                </Container>


                <div className="home__poster">
                    <a href="https://www.youtube.com/channel/UCwDxrXhDmDHehSDbo76RWCg" rel="noopener noreferrer" target="_blank" style={{ textDecoration: "none", color: "black" }}><h1 className="home__youtubeLink">YouTube.com/South Mumbai United Football Club <FaYoutube color="red" size={55} /></h1></a>
                </div>
                <Container fluid className="home__youtube" >
                    <Youtube />
                </Container>
            </div >
        )
    }
}
export default Home