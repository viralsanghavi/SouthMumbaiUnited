import React, { useState, useEffect } from "react";
import { Container, Row, Table } from "reactstrap";
import "./player.css";
import { database } from "../config/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const PCard = ({ position }) => {
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    // this is where code runs
    (async () => {
      setPlayer([]);
      const querySnapshot = await getDocs(collection(database, "boysTeam"));
      let data = [];
      querySnapshot.forEach(
        (snapshot) =>
          (data = [
            ...data,
            {
              id: snapshot.id,
              data: snapshot.data(),
            },
          ])
      );
      setPlayer(data);
    })();
  }, []);

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
      <Table striped responsive hover bordered>
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Position</th>
            <th>Jersey Number</th>
          </tr>
        </thead>
        <tbody>
          {player.map((play) => (
            <tr key={play.id}>
              <td>
                {play.data.fname}&nbsp;{play.data.lname}
              </td>
              <td>{play.data.position}</td>
              <td>{play.data.jeseryNumber}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Row>
  );
};

function BoysTeam() {
  return (
    <Container fluid="xl" className="team__spaceLeft">
      <PCard position="Goalkeeper" />
      {/* <PCard position="Defender" />
            <PCard position="Midfielder" />
            <PCard position="Forward" /> */}
    </Container>
  );
}

export default BoysTeam;
