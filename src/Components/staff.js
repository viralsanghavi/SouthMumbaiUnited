import React from 'react'
import './Staff.css'
import { useState } from 'react';

function ReUsableCard({ name, lname, post }) {
    let imgSrc;
    try {
        imgSrc = require('../assets/' + name + '.jpg')
    } catch {
        imgSrc = require('../assets/Smulogo.png')
    }
    return (

        <div className="col-md-3 col-sm-6 ">
            <div className="thumbnail">
                <img alt="" src={imgSrc}

                    className="team-img" />
                <div className="caption"><h4>{name + " " + lname}</h4><p>{post}</p></div>
            </div>
        </div>
    )
}

const Staff = () => {
    const [selected, setSelected] = useState(true)
    return (
        <div className="coaches">
            {/* <div className="text-center" style={{ padding: "100px 0" }} id="team1" >
                    <div className="col-md-8 col-md-offset-2 section-title">
                        <h2 className="title">MEET THE TEAM</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
                    </div>
                </div>

                <div className="container">
                    <div id="row" data-aos="zoom-in">
                        <ReUsableCard name="Nitesh" lname=" Singh" post="Director" />
                        <ReUsableCard name="Raunak" lname=" Desai" post="HEAD COACH" />
                        <ReUsableCard name="Drishti" lname=" Punjabi" post="" />
                    </div>
                    <div id="row" data-aos="zoom-in">
                        <ReUsableCard name="Jay" lname=" Koradia" post="ASSISTANT COACH" />
                        <ReUsableCard name="Elvis" lname="Ferrao" post="ASSISTANT COACH" />
                        <ReUsableCard name="Shreya" lname="Bhat" post="ASSISTANT COACH" />
                        <ReUsableCard name="Viral" lname="Sanghavi" post="ASSISTANT COACH" />

                    </div>

                </div > */}
            <div className="coaches__left">
                <div className="section-title">
                    <h2 className=""> <span style={{ color: "rgb(255, 165, 75)" }}> MEET</span> THE TEAM</h2>
                    <h5>A Coach is someone who can give correction without resentment.</h5>
                </div>

                <div className='coaches__selector'>
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className="avatar" />
                    <div className="coach__position">
                        <h1>Nitesh Singh</h1>
                        <p>Director</p>
                    </div>
                </div>
                <div className="coaches__selector">
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className="avatar" />
                    <div className="coach__position">
                        <h1>Nitesh Singh</h1>
                        <p>Director</p>
                    </div>
                </div>
                <div className="coaches__selector">
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className="avatar" />
                    <div className="coach__position">
                        <h1>Nitesh Singh</h1>
                        <p>Director</p>
                    </div>
                </div>
            </div>
            <div className="coaches__right">
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quisquam id, dolorum sit labore sunt, officia perspiciatis reiciendis consequuntur dolore fuga facilis perferendis nemo a inventore. Architecto praesentium excepturi fugit? </p>

            </div>
        </div>
    )
}



export default Staff