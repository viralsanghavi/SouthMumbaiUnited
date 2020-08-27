import React, { useState } from 'react'
import './Staff.css'
import CoachLarge from './CoachLarge'

// function ReUsableCard({ name, lname, post }) {
//     let imgSrc;
//     try {
//         imgSrc = require('../assets/' + name + '.jpg')
//     } catch {
//         imgSrc = require('../assets/Smulogo.png')
//     }
//     return (

//         <div className="col-md-3 col-sm-6 ">
//             <div className="thumbnail">
//                 <img alt="" src={imgSrc}

//                     className="team-img" />
//                 <div className="caption"><h4>{name + " " + lname}</h4><p>{post}</p></div>
//             </div>
//         </div>
//     )
// }

const Staff = () => {
    const [coachInfo, setCoachInfo] = useState({
        name: "Nitesh Singh",
        role: "Director"
    })
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

                <div className='coaches__selector' onClick={e => setCoachInfo({ name: "Nitesh Singh", role: "Director" })}>
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className="avatar" />
                    <div className="coach__position">
                        <h1>Nitesh Singh</h1>
                        <p>Director</p>
                    </div>
                </div>
                <div className="coaches__selector" onClick={e => setCoachInfo({ name: "Raunaq Desai", role: "Head Coach" })} >
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className="avatar" />
                    <div className="coach__position">
                        <h1>Raunaq Desai</h1>
                        <p>Head Coach</p>
                    </div>
                </div>
                <div className="coaches__selector" onClick={e => setCoachInfo({ name: "Viral Sanghavi", role: "Tech Lead" })} >
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className="avatar" />
                    <div className="coach__position">
                        <h1>Viral Sanghavi</h1>
                        <p>Tech Lead</p>
                    </div>
                </div>
            </div>

            <CoachLarge role={coachInfo.role} name={coachInfo.name} />
        </div>
    )
}



export default Staff