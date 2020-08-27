import React from 'react'

const CoachLarge = ({ role, name }) => {
    return (
        <div className="coaches__right">
            {!role && !name
                ?
                <h1>Team Matters</h1>
                :
                <>
                    < img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
                    <h3>{name}</h3>
                    <h3>{role}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quisquam id, dolorum sit labore sunt, officia perspiciatis reiciendis consequuntur dolore fuga facilis perferendis nemo a inventore. Architecto praesentium excepturi fugit? </p>
                </>
            }
        </div>
    )
}

export default CoachLarge
