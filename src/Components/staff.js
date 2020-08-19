import React from 'react'
import './Staff.css'

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

class Staff extends React.Component {
    render() {


        return (
            <div>
                <div className="text-center" style={{ padding: "100px 0" }} id="team1" >
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

                </div >
            </div>
        )
    }

}

export default Staff