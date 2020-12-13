import React from "react";
import "./Staff.css";

// function ReUsableCard({ name, lname, post }) {
//     let imgSrc;
//     try {
//         imgSrc = require('../../assets/' + name + '.jpg')
//     } catch {
//         imgSrc = require('../../assets/Smulogo.png')
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
      img:
        "https://firebasestorage.googleapis.com/v0/b/reactsmu.appspot.com/o/nitesh.jpg?alt=media&token=0ecb79bc-fbed-4ed9-a966-c7b27bd1d152",
      bio:
        "AFC certified Coach, worked with Mohun Bagan Fc and Minerva Punjab FC",
    },
    {
      name: "Dr. Raunak Desai",
      role: "AIFF Certified Coach, Head coach",
      img:
        "https://firebasestorage.googleapis.com/v0/b/reactsmu.appspot.com/o/Raunak.jpg?alt=media&token=6b85ec78-5f10-4f40-a581-b0cd97b1116f",
      bio: "Doctor, AIFF certified coach , worked with Somaiya Sports Academy.",
    },
    {
      name: "Elvis Ferrao",
      role: "Coach",
      img:
        "https://firebasestorage.googleapis.com/v0/b/reactsmu.appspot.com/o/Elvis.jpg?alt=media&token=b08bc613-64f5-415b-b864-6353439d0a64",
      bio: "Performance Team member",
    },
    {
      name: "Jay Koradia",
      role: "Coach",
      img:
        "https://firebasestorage.googleapis.com/v0/b/reactsmu.appspot.com/o/Jay.jpg?alt=media&token=83fbecd4-be58-47fc-a313-b4f666d5c020",
      bio: "coach",
    },
    {
      name: "Shreya Bhat",
      role: "Coach",
      img:
        "https://firebasestorage.googleapis.com/v0/b/reactsmu.appspot.com/o/Jay.jpg?alt=media&token=83fbecd4-be58-47fc-a313-b4f666d5c020",
      bio:
        "AIFF certified Grassroots Coach, Represented Mumai District in Inter Women's district in Jalgaon.",
    },
    {
      name: "Soureen Gaitonde",
      role: "Coach",
      img:
        "https://firebasestorage.googleapis.com/v0/b/reactsmu.appspot.com/o/soureeen.jpg?alt=media&token=df61c9d4-d970-4092-8e0a-05b12408439d",
      bio: "Player, Coach",
    },
    {
      name: "Viral Sanghavi",
      role: "Coach /Social Media",
      img:
        "https://firebasestorage.googleapis.com/v0/b/reactsmu.appspot.com/o/viral.jpg?alt=media&token=dbdbc849-8810-43cd-89f9-852c3a8dc573",
      bio: "Player, Coach , Social media team",
    },
    {
      name: "Ananya Dornal",
      role: "Social Media",
      img:
        "https://firebasestorage.googleapis.com/v0/b/reactsmu.appspot.com/o/anan.jpg?alt=media&token=d369229b-dad5-41de-b219-83d5604bc6c6",
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
