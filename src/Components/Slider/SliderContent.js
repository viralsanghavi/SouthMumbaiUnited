import React from 'react'

import './Slider.css'

const SliderContent = ({ width, transition, translate, children }) => {
    return (
        <div style={{
            transform: `translateX(-${translate}px)`,
            transition: `transform ease-out ${transition}s`,
            height: '100%',
            width: `${width}px`,
            display: 'flex'
        }}>
            {children}

        </div>
    )
}

export default SliderContent
