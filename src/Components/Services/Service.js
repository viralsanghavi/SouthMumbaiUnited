import React from 'react'
import { Card } from 'reactstrap'
import './Services.css'

const Service = ({ title, description }) => {
    return (
        <Card className="service__card">

            <img src={description} alt={`desc${description}`} />
            <h4>{title}</h4>
        </Card>
    )
}

export default Service
