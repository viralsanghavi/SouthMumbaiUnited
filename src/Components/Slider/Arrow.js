import React from 'react'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'
const Arrow = ({ direction, handleClick }) => {
    return (
        <div
            onClick={handleClick}
            style={{
                display: 'flex',
                position: 'absolute',
                top: '50%',
                height: '40px',
                width: '40px',
                justifyContent: 'center',
                background: 'white',
                borderRadius: '50%',
                cursor: 'pointer',
                alignItems: 'center',
                transition: 'transform ease-in 0.1s',
                '&: hover': {
                    transform: 'scale(1.1)',
                },
                'img': {
                    transform: `translateX(${direction === 'left' ? '-2' : '2'} px)`,
                    '&:focus': {
                        outline: 0,
                    }
                },
                right: `${direction === 'right' && '25px'}`,
                left: `${direction === 'left' && '25px'}`,



            }}
        >
            { direction === 'right' ? <BsChevronRight /> : <BsChevronLeft />}
        </div >
    )
}

export default Arrow
