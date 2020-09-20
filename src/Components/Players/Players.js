import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './player.css'
import classnames from 'classnames';
import { Container } from 'reactstrap'
import BoysTeam from './BoysTeam';
import GirlsTeam from './GirlsTeam';

const Players = (props) => {
    const [active, setActive] = useState('1')
    const toggle = tab => {
        if (active !== tab) setActive(tab);
    }
    return (
        <div className="teams">
            <Container className="team__subNav">

                <nav className="team__grid" data-aos="zoom-in" >
                    <ul className="team__list">
                        <li><Link to="/team"
                            className={classnames({ active: active === '1' }) + 'boys'}
                            onClick={() => { toggle('1') }}
                        >BOYS TEAM</Link></li>
                        <li>
                            <Link to="/team"
                                className={classnames({ active: active === '2' }) + 'girls'}
                                onClick={() => { toggle('2') }}
                            >Girls TEAM</Link></li>

                    </ul>
                </nav>
            </Container>
            <div className="team__divide">
                <Container fluid={true} className="containerPlayer col">
                    {active === '1' ? <BoysTeam /> : <GirlsTeam />}
                </Container>
            </div>

        </div>
    )
}

export default Players
