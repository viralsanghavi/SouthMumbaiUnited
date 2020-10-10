import React from 'react'
import Service from './Service'
import './Services.css'

const Services = () => {
    const services = [
        {
            serve: "Performance team",
            img: "https://uswfoxtail.blob.core.windows.net/foxtail-prod-uploads/images/Footba.bebe9157.fill-1366x700.format-jpeg.jpegquality-80.jpg"
        },
        {
            serve: "Academy",
            img: "https://frontiersinblog.files.wordpress.com/2018/06/frontiers-in-physiology-football-soccer-agility-tests-performance.jpg?w=940"
        }
        ,
        {
            serve: "Empowering women",
            img: "https://img.fifa.com/image/upload/t_l1/vxchdkmhnkesesbore1o.jpg"
        },
        {
            serve: "Developing coaches",
            img: "https://www.athleteassessments.com/wp-content/uploads/2014/10/Double_Call_Out_453x255_RS_Coach-2.jpg"
        }
    ]
    return (
        <div className="servicePage">

            <h1 className="home__youtubeLink services__heading">OUR SERVICES</h1>
            <div className="services">
                {services.map(service => <Service key={`service ${service}`}
                    title={service.serve}
                    description={service.img}
                />)}
            </div>
        </div>
    )
}

export default Services
