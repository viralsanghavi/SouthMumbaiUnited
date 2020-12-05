import React, { useState } from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import { toast } from "react-toastify";
import fire from '../config/firebaseConfig';

export const Subscribe = () => {
    const [email, setEmail] = useState('')
    const Submit = () => {

        try {
            fire.database().ref('newsletter').push({
                email: email,
            })
            toast("Your Response is Recorded.", { type: "success" });
            setEmail('')

        } catch (error) {
            console.log(error)
            toast("Oppss Some Error Occured..", { type: "error" });
        }

    }

    return (
        <div className="subs">
            <input placeholder="Subscribe to Our NewsLetter" className="subscribe" type="text"
                value={email}
                onChange={e => setEmail(e.target.value)} />
            <FaTelegramPlane onClick={Submit} type="button" className="searchIcon" />
        </div>
    )
}
