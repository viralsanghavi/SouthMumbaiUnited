// import React, { useState } from 'react'
// import fire from '../config/firebaseConfig';

// const database = fire.firestore();
// export const PushPlayer = () => {
//     const [fname, setFname] = useState('')
//     const [lname, setLname] = useState('')
//     const [position, setPosition] = useState('')
//     const [jeseryNumber, setJeseryNumber] = useState(Number(100))

//     const handleSubmit = e => {
//         e.preventDefault()
//         const data = {
//             fname,
//             lname,
//             position,
//             jeseryNumber
//         };
//         database.collection('girlsTeam').doc().set(data);
//         setFname('')
//         setLname('')
//         setPosition('')
//         setJeseryNumber(Number(100))
//     }

//     return (
//         <div>
//             <form>
//                 <input placeholder="fname" value={fname} type="text" onChange={e => setFname(e.target.value)} />
//                 <input placeholder="lname" value={lname} type="text" onChange={e => setLname(e.target.value)} />
//                 <input placeholder="position" value={position} type="text" onChange={e => setPosition(e.target.value)} />
//                 <input placeholder="jersetNumber" value={jeseryNumber} type="number" onChange={e => setJeseryNumber(e.target.value)} />
//                 <button onClick={(e) => handleSubmit(e)}>Submit Data</button>
//             </form>
//         </div>
//     )
// }
