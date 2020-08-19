import React, { useState, useEffect } from 'react'
import './player.css'
import fire from '../config/firebaseConfig'

import { Container, Card, CardImg, Row } from 'reactstrap'


const PCard = ({ position, }) => {

    const [player, setPlayer] = useState([])
    const database = fire.firestore();
    useEffect(() => {
        const unsubscribe = database.collection('girlsTeam').orderBy('jeseryNumber')
            .onSnapshot(snapshot => (
                setPlayer(snapshot.docs.map(doc => doc.data()))
            ))
        return async () => {
            await unsubscribe()
        }

    }, [])
    return (<Row data-aos="zoom-in" className="rowTeam">

        <div className="grid-12">
            <h1>{position}</h1>
        </div>

        <div className="d-inline-block">
            {
                player.map((p, index) => {
                    if (p.position === position) {


                        return (
                            < Card key={index} className="float-left player-card" >
                                <CardImg alt="player" src={require('../../assets/Jay.jpg')} />
                                <div className="player">
                                    <p className="player__Text"><strong>{p.jeseryNumber}</strong></p>
                                    <span className="mu-item__firstname">{p.fname}</span>
                                    <span className="mu-item__firstname">{p.lname}</span>
                                </div>
                            </Card>
                        )
                    }
                })
            }

        </div>
    </Row>
    )
}


function GirlsTeam() {
    return (
        <Container fluid="xl" className="team__spaceLeft">
            <PCard position="Goalkeeper" />
            <PCard position="Defender" />
            <PCard position="Midfielder" />
            <PCard position="Forward" />
        </Container>
    )
}

export default GirlsTeam
