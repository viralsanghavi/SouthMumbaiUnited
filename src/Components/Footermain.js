import React from 'react'
import './Footer.css'
import logo from '../assets/Smulogo.png'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa'
import { Subscribe } from './Subscribe'

function Footermain() {
    return (
        <footer className="footer">
            <div className="footer__banner">
                <h2>We Are <strong style={{ borderBottom: "3px solid red" }}>South Mumbai United</strong></h2>
            </div>
            <div className="footer_data">

                <div className="footer__centerContent">
                    <div className="footer__logo">
                        <img alt="" src={logo} style={{ maxWidth: "100%" }} />
                    </div>
                </div>
                <div className="footer__mainContent">

                    <div className="footer__centerContentP1">
                        <p><strong>SOUTH mumbai sports pvt. ltd</strong>

                            <br />
                            sea view, 6th floor, dongersi rd.


                            <br />
                            malabar hill, mumbai - 400006
                            <br />

                            South Mumbai
                    </p>
                        <a href="mailto:southmumbaiunitedfc@gmail.com" style={{
                            color: 'white'
                        }}>EMAIL : <strong style={{ textTransform: "lowercase" }}>southmumbaiunitedfc@gmail.com</strong></a >
                        <br />
                        <p>Mobile : <strong>+91 9324686568</strong></p>
                        <br />
                    </div>
                    <a href="https://www.google.com/maps/place/Chowpatty,+Girgaon,+Mumbai,+Maharashtra/@18.9542676,72.8098952,17z/data=!3m1!4b1!4m5!3m4!1s0x3be7ce0f115aae39:0x66ef35bcecb08dfe!8m2!3d18.9547494!4d72.8138818" className="map">
                        <p><strong>MAP</strong></p>
                    </a>
                </div>
                <div className="footer__centerContentCenter">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">HOME</Link>
                            </li>
                            <li>

                                <Link to="/about">ABOUT</Link>
                            </li>
                            <li>

                                <Link to="team">TEAM</Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to="/contact">CONTACT</Link>
                            </li>
                            {/* <li>
                                <Link to="/blog">SHOP</Link>
                            </li> */}
                            <li>
                                <Link to="/staff">STAFF</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="footer__media">
                    <Subscribe />
                    <div className="media__symbols">
                        <a href="https://www.facebook.com/SouthMumbaiUnitedFc/">
                            <FaFacebookF className="media__link" color={"white"} size={20} />
                        </a>

                        <a href="https://www.youtube.com/channel/UCwDxrXhDmDHehSDbo76RWCg">
                            <FaYoutube color={"white"} className="media__link" size={20} />
                        </a>
                        <a href="https://twitter.com/FC_SMU">
                            <FaTwitter color={"white"} size={20} className="media__link" />
                        </a>
                        <a href="https://www.instagram.com/southmumbaiunitedfc/">
                            <FaInstagram color={"white"} size={20} className="media__link" />
                        </a>

                    </div>
                    <div className="bottom">

                        <center>
                            <span className="far fa-copyright"></span> 2020 All rights reserved.
                        </center>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footermain
