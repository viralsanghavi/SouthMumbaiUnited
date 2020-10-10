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
        role: "Director",
        img: require('../assets/Staff/director.jpg'),
        bio: "AFC certified Coach, worked with Mohun Bagan Fc and Minerva Punjab FC"
    })

    const team = [
        {
            name: "Nitesh Singh",
            role: "Director",
            img: require('../assets/Staff/director.jpg'),
            bio: "AFC certified Coach, worked with Mohun Bagan Fc and Minerva Punjab FC"
        },
        {
            name: "Dr. Raunak Desai",
            role: "AIFF Certified Coach, Head coach",
            img: require('../assets/Staff/Raunak.jpg'),
            bio: "Doctor, AIFF certified coach , worked with Somaiya Sports Academy."
        },
        {
            name: "Elvis Ferrao",
            role: "Assistant Coach",
            img: require('../assets/Staff/Elvis.jpg'),
            bio: 'Performance Team member'
        },
        {
            name: "Jay Koradia",
            role: "Assistant Coach",
            img: require('../assets/Staff/Jay.jpg'),
            bio: "Assistant coach"
        },
        {
            name: "Shreya Bhat",
            role: "Assistant Coach",
            img: require('../assets/Staff/Shreya.jpg'),
            bio: "AIFF certified Grassroots Coach, Represented Mumai District in Inter Women's district in Jalgaon."
        },
        {
            name: "Soureen Gaitonde",
            role: "Assistant Coach",
            img: require('../assets/Staff/soureeen.jpg'),
            bio: "Player, Coach"
        },
        {
            name: "Viral Sanghavi",
            role: "Assistant Coach",
            img: 'requirerequire',
            bio: "Player, Coach , Social media team"
        },
        {
            name: "Ananya Dornal",
            role: "Social Media",
            img: require('../assets/Staff/anan.jpg'),
            bio: "Player, Social media team"
        },
    ]
    return (
        <div className="coaches">
            <div className="coaches__left">
                <div className="section-title">
                    <h2 className=""> <span style={{ color: "rgb(255, 165, 75)" }}> MEET</span> THE TEAM</h2>
                    <h5>A Coach is someone who can give correction without resentment.</h5>
                </div>

                <div className="coaches__scrollNames">
                    {team.map(person =>
                        <div className='coaches__selector' onClick={e => setCoachInfo({ name: person.name, role: person.role, img: person.img, bio: person.bio })}>
                            <img src={person.img} alt="Avatar" className="avatar" />
                            <div className="coach__position">
                                <h1>{person.name}</h1>
                                <p>{person.role}</p>
                            </div>
                        </div>
                    )}

                </div>

            </div>

            <CoachLarge role={coachInfo.role} name={coachInfo.name} img={coachInfo.img} bio={coachInfo.bio} />
        </div>
    )
}



export default Staff