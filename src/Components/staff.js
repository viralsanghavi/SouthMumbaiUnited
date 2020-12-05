import React from "react";
import "./Staff.css";

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

//                     className="team-img" />w
//                 <div className="caption"><h4>{name + " " + lname}</h4><p>{post}</p></div>
//             </div>
//         </div>
//     )
// }

const Staff = () => {
  const team = [
    {
      name: "Nitesh Singh",
      role: "Director",
      img: require("../assets/Staff/director.jpg"),
      bio:
        "AFC certified Coach, worked with Mohun Bagan Fc and Minerva Punjab FC",
    },
    {
      name: "Dr. Raunak Desai",
      role: "AIFF Certified Coach, Head coach",
      img: require("../assets/Staff/Raunak.jpg"),
      bio: "Doctor, AIFF certified coach , worked with Somaiya Sports Academy.",
    },
    {
      name: "Elvis Ferrao",
      role: "Coach",
      img: require("../assets/Staff/Elvis.jpg"),
      bio: "Performance Team member",
    },
    {
      name: "Jay Koradia",
      role: "Coach",
      img: require("../assets/Staff/Jay.jpg"),
      bio: "coach",
    },
    {
      name: "Shreya Bhat",
      role: "Coach",
      img: require("../assets/Staff/Shreya.jpg"),
      bio:
        "AIFF certified Grassroots Coach, Represented Mumai District in Inter Women's district in Jalgaon.",
    },
    {
      name: "Soureen Gaitonde",
      role: "Coach",
      img: require("../assets/Staff/soureeen.jpg"),
      bio: "Player, Coach",
    },
    {
      name: "Viral Sanghavi",
      role: "Coach",
      img: "requirerequire",
      bio: "Player, Coach , Social media team",
    },
    {
      name: "Ananya Dornal",
      role: "Social Media",
      img: require("../assets/Staff/anan.jpg"),
      bio: "Player, Social media team",
    },
  ];
  return (
    <div className="coaches">
      <section className="team" id="team">
        <div className="container text-center">
          <h2>
            OUR
            <span>TEAM</span>
          </h2>
          <p>A Coach is someone who can give correction without resentment.</p>
          <div className="row">
            {team.map((staff) => (
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="box" key={staff.name}>
                  <div className="image">
                    <img src={staff.img} className="img-fluid" alt="Avatar" />
                  </div>
                  <h3>{staff.name}</h3>
                  <h4>{staff.role}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Staff;
