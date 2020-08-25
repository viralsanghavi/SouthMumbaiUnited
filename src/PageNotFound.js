import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
    return (
        <div className="notfound">
            <Link to="/"><p>Go To Home</p></Link>
            <div><h1 className="not">404</h1><div className="notcont"><h2 className="nottext">This page could not be found.</h2></div></div>

        </div>
    )
}

export default PageNotFound
