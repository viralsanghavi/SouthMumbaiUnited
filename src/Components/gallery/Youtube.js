import React, { useState, useEffect } from 'react'
import './Youtube.css'
import { Container } from 'reactstrap'


const Youtube = () => {

    const [resultyt, setResultYt] = useState([])
    const API = process.env.REACT_APP_API_KEY_YOUTUBE
    const channelID = 'UCwDxrXhDmDHehSDbo76RWCg'
    const result = 3;

    // https://www.googleapis.com/youtube/v3/search?key=AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA&channelId=UCXgGY0wkgOzynnHvSEVmE3A&part=snippet,id&order=date&maxResults=10

    var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`


    useEffect(() => {
        const clicked = async () => {
            await fetch(finalURL)
                .then(response => response.json())
                .then(({ items }) => {
                    // console.log(items)
                    return setResultYt(items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId))
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        clicked()
    },[])
    return (
        <Container fluid className="youtube__Card">
            {resultyt.map((links, i) => (
                <div key={i} className="youtube__carding">
                    <iframe width="560" height="315" className="frame" title={i} src={links} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>

            ))}
        </Container>
    )
}

export default Youtube
