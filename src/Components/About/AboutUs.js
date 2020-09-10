import React from 'react'
import { Container } from 'reactstrap'
import './About.css'
const AboutUs = () => {
    return (
        <div>

            <section data-aos="zoom-in" className="about__info">
                <div className="about__details">
                    <h2 className="about__title">ABOUT US</h2>
                    <h5 >SMU is a registered club in the MDFA & with the All India Football Federation.
                    Also is a part of the the State league Qualifiers which are carried out as a part of the Indian Women's League
                    </h5>

                </div>
            </section>
            <Container className="aboutus">
                <div data-aos="zoom-in" className="about__story">
                    <div className="about__storyLeft">
                        <span >
                            Our Story
                    </span>
                        <h1>
                            Our Passion For Football
                    </h1>
                    </div>
                    <div className="about__storyRight">

                        <p>Established in 2008, <u>SOUTH MUMBAI UNITED</u> was started with an intention to increase the number of people playing this beautiful game.
                        <br />
                        Restarted in 2019, this team aims to make SMU stronger and our aim is to constanly ensure quality standards to help player develop holistically.
                    </p>

                    </div>
                </div>
                <div className="about__start">
                    <h2 className="about__startTitle">
                        How did it start?
                    </h2>
                    <p>
                        Philosophy of the team is to WIN every match playing the SMU way be it friendly or a league match.
                        For this winning mind set, the key is to the win the day.
                        We prepare with the same mind set for every practice as if it’s a match.
                        If win in practice only then you will win in the match.
                    </p>
                </div>


                <div data-aos="zoom-in" className="about_missionMain">
                    <h2 className="about__missionTitle">Mission and Vision</h2>
                    <div className="about__mission">
                        <div className="p-4 mission">
                            <div className="about__missionLeft">
                                <h2>WE ARE ON A MISSION</h2>

                                <blockquote className="curly-quotes">
                                    To provide each player the opportunity to play football in a supporting and friendly environment. To create a challenging enviroment for talented players who aspire to reach their full potential. SMU wants to give young girls opportunities to grow.
                                </blockquote>

                            </div>
                        </div>

                        <div className="p-4 vision">
                            <div className="about__missionRight">

                                <h2>ROAD MAP</h2>
                                <blockquote className="curly-quotes">

                                    To develop a reputation for producing well trained players with good football foundations who embody a good sporting spirit to maintain high standards of excellence to produce champions for the country.
                                </blockquote>

                            </div>
                        </div>
                    </div>
                </div>


                <div data-aos="zoom-in" className="about__philosophy">
                    <h2 className="about__philosophyTitle">Philosophy</h2>
                    <p>
                        Philosophy of the team is to WIN every match playing the SMU way be it friendly or a league match.
                        For this winning mind set, the key is to the win the day.
                        We prepare with the same mind set for every practice as if it’s a match.
                        If win in practice only then you will win in the match.
                    </p>
                    <span>
                        You are a SMU player on and off the field,
                        so behave like one.
                    <br />
                        <u>
                            Humble – Helpful – Never Give Up
                    </u>

                    </span>

                </div>
            </Container>
        </div>
    )
}

export default AboutUs
