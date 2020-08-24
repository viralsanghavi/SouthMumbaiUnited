import React, { useState, useEffect } from 'react'
import { Container, Row, Table, Spinner } from 'reactstrap'
import './player.css'
import { database } from '../config/firebaseConfig'


const PCard = ({ position }) => {

    const [player, setPlayer] = useState([])

    useEffect(() => {
        // this is where code runs
        const unsubscribe = database.collection('boysTeam').orderBy('jeseryNumber').onSnapshot(snapshot => (
            setPlayer(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ))
        return async () => {
            await unsubscribe()
        }

        // Will run once when component loads and never again if [] is kept blank
    }, [])
    return (
        <Row data-aos="zoom-in" className="rowTeam">
            {/* 
            <div className="grid-12">
                <h1>{position}</h1>
            </div>

            <div className="d-inline-block">
                {
                    player.map((p, index) => {
                        if (p.position === position) {
                            return (
                                <>
                                    {!p.img ?
                                        <Card key={index} className="float-left player-card" >
                                            <CardImg alt="player" src={require('../../assets/Jay.jpg')} />
                                            <div className="player">
                                                <p className="player__Text"><strong>{p.jeseryNumber}</strong></p>
                                                <span className="mu-item__firstname">{p.fname}</span>
                                                <span className="mu-item__firstname">{p.lname}</span>
                                            </div>
                                        </Card>
                                        :
                                        <h1>No Images</h1>
                                    }
                                </>
                            )
                        }
                    })
                }

            </div> */}
            {
                player ?


                    <Table striped responsive hover bordered>

                        <thead>
                            <tr>
                                <th>Player Name</th>
                                <th>Position</th>
                                <th>Jersey Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {player.map(
                                play =>
                                    <tr key={play.id}>
                                        <td>{play.data.fname}&nbsp;{play.data.lname}</td>
                                        <td>{play.data.position}</td>
                                        <td>{play.data.jeseryNumber}</td>
                                    </tr>
                            )}
                        </tbody>

                    </Table>
                    :
                    <Spinner type="grow" color="dark" style={{ width: '3rem', height: '3rem', textAlign: "center" }} className="data__spinner" />
            }
        </Row >
    )
}

function BoysTeam() {


    return (

        <Container fluid="xl" className="team__spaceLeft">
            <PCard position="Goalkeeper" />
            {/* <PCard position="Defender" />
            <PCard position="Midfielder" />
            <PCard position="Forward" /> */}
        </Container>
    )
}

export default BoysTeam
