import React, { useEffect, useState } from 'react'
import { Table, Container, Spinner } from 'reactstrap';
import fire from '../config/firebaseConfig';
import './LoginToForm.css'
import { MdRemoveCircleOutline } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
// import firebase from 'firebase'
// import { toast } from 'react-toastify';


function LoginToForm({ state }) {
    const [data, setData] = useState([])
    const [load, setLoad] = useState(true)
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    useEffect(() => {
        try {
            var ref = fire.database().ref()

            ref.on("value", snapshot => {
                const messageList = Object.keys(snapshot.val().messages).map(key => ({
                    ...snapshot.val().messages[key],
                    uid: key,
                }));
                setData(messageList);
                setLoad(false)
            });
        } catch (error) {
            console.log(error)
        }

    }, [])

    // const handleSignOut = () => {
    //     // firebase
    //     //     .auth().signInWithEmailAndPassword(email, password)
    //     //     .then(res => {
    //     //         console.log(res)
    //     //         setUser({ email: res.user.email, uid: res.user.uid })
    //     //     })
    //     firebase.auth().signOut().then(function () {
    //         // Sign-out successful.
    //         toast("Signed Out", { type: "error" })

    //     })
    //         .catch(error => {
    //             console.log(error)
    //             toast(error.message, { type: "error" })
    //         })
    // }

    let location = useLocation()
    const remove = (uid) => {
        // e.preventDefault()
        let userRef = fire.database().ref('messages/' + uid);
        userRef.remove()
        console.log("removed")
    }
    return (

        <Container fluid className="dataContact">
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        Contacted Us
                    </NavLink>
                </NavItem>
                {/* <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        Subscribed Us
                </NavLink>
                </NavItem> */}
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    {location.state &&
                        <div>
                            {load ?
                                <div>
                                    <Spinner type="grow" color="dark" style={{ width: '3rem', height: '3rem' }} className="data__spinner" />
                                    <div className="text-primary">LOADING...</div>
                                </div>
                                :

                                <Table bordered hover className="data__form">
                                    <thead>
                                        <tr>
                                            <th>Sender</th>
                                            <th>Email</th>
                                            <th>Message</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Object.values(data).map((dat, index) =>
                                            <tr key={dat.uid}>
                                                <td>{dat.name}</td>
                                                <td>{dat.email}</td>
                                                <td>{dat.message}</td>
                                                <td className="data__removeButton"><MdRemoveCircleOutline onClick={() => remove(dat.uid)} /></td>
                                            </tr>
                                        )}

                                    </tbody>
                                </Table >
                            }
                        </div>
                    }
                </TabPane>
                {/* <TabPane tabId="2">

                </TabPane> */}
            </TabContent>


        </Container>
    )
}

export default LoginToForm