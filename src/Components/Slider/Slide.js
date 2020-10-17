import React from 'react'

import './Slider.css'


const Slide = ({ content, width }) => {
    return (
        <div style={{
            height: '100%',
            width: `${width}px`,
            backgroundImage: `url(${content})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        }}>

        </div>
    )
}

export default Slide