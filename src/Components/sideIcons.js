import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons' 
import { faFacebookF, faInstagram,faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons';


class Icons extends React.Component {

    render() {
        return (
            <div>

            <div className="icons">
               
                <ul>
                    <a href="https://www.facebook.com/SouthMumbaiUnitedFc" rel="noopener noreferrer" target="_blank"><li className="facebook"><FontAwesomeIcon icon={faFacebookF} />
                    </li></a>
                    <a href="https://www.instagram.com/southmumbaiunited"  rel="noopener noreferrer" target="_blank"><li className="instagram"><FontAwesomeIcon icon={faInstagram} />
                    </li></a>
                    <a href="https://twitter.com/fc_smu"  rel="noopener noreferrer" target="_blank"><li className="twitter"><FontAwesomeIcon icon={faTwitter} />
                    </li></a>
                    <a href="https://www.youtube.com/channel/UCwDxrXhDmDHehSDbo76RWCg" rel="noopener noreferrer" target="_blank"><li className="youtube"><FontAwesomeIcon icon={faYoutube} />
                    </li></a>
                </ul>
            </div>
            </div>
        )

    }

}

export default Icons