import React, { useState } from 'react';
import '../Assets/Styles/Contact.css';
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

const ContactUs = () => {
    // const firebaseConfig = {
    //     apiKey: "AIzaSyCFx9B-z4VQDl0JG2264t8EsS5R5tm-p8k",
    //     authDomain: "va-tech-b5100.firebaseapp.com",
    //     projectId: "va-tech-b5100",
    //     storageBucket: "va-tech-b5100.appspot.com",
    //     messagingSenderId: "233003430207",
    //     appId: "1:233003430207:web:f7f4d0b41b763e18bea38a",
    //     measurementId: "G-P24ME1XMJ8"
    // };

    // const app = initializeApp(firebaseConfig);
    // // Initialize Firebase
    // const db = getFirestore();


    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");
    const [contact, setcontact] = useState("");
    const [message, setmessage] = useState("");


    const firstNameChange = (e) => {
        setfirstName(e.target.value);
    }
    const lastNameChange = (e) => {
        setlastName(e.target.value);
    }
    const emailChange = (e) => {
        setemail(e.target.value);
    }
    const contactChange = (e) => {
        setcontact(e.target.value);
    }
    const messageChange = (e) => {
        setmessage(e.target.value);
    }

    // async function sendMessage() {
    //     let timeStamp = Date.now();
    //     let name = firstName + " " + lastName;
    //     await setDoc(doc(db, "contact", name), {
    //         time: new Date(timeStamp),
    //         name: name,
    //         email: email,
    //         contact: contact,
    //         message: message
    //     });
    //     setfirstName("")
    //     setlastName("")
    //     setemail("")
    //     setcontact("")
    //     setmessage("")

    //     alert("Message sent successfully");
    // }

    async function sendMessage() {
        alert("Sent message")
    }



    return (
        <>
            <div className="contact-us">
                <div className="contactContentt">
                    <span className="remaining-span">
                        <span className="span">Contact
                        </span>
                        {'\u00A0'}Us</span>
                    <div className='contactus-headerr'>Schedule a free consultation or fill out the form and we will follow up with you shortly.</div>
                    <div className='contactus-descc'>or drop your requirement at
                        <b>
                            hello@vatech.com
                        </b>
                    </div>
                </div>
                <div className="contact-Formm">
                    <div className="form-linee">
                        <div className="form-groupp fName">
                            <input type="text" className="form-controll"
                                value={firstName}
                                id="name"
                                placeholder="John"
                                onChange={firstNameChange}
                                required
                                autocomplete="off" />
                            <label htmlFor="name" className="form-labell">First Name</label>
                        </div>
                        <div className="form-groupp lName">
                            <input type="text" className="form-controll"
                                value={lastName}
                                id="lastName"
                                placeholder="Doe"
                                onChange={lastNameChange}
                                required
                                autocomplete="off" />
                            <label htmlFor="lastName" className="form-labell">Last Name</label>
                        </div>
                    </div>

                    <div className="form-linee">
                        <div className="form-groupp email">
                            <input type="email" className="form-controll"
                                value={email}
                                id="email"
                                placeholder="example@gmail.com"
                                onChange={emailChange}
                                required
                                autocomplete="off" />
                            <label htmlFor="email" className="form-labell">Email</label>
                        </div>
                        <div className="form-groupp number">
                            <input type="number" className="form-controll"
                                value={contact}
                                id="number"
                                placeholder="+91123456789"
                                onChange={contactChange}
                                required
                                autocomplete="off" />
                            <label htmlFor="number" className="form-labell">Contact Number</label>
                        </div>
                    </div>

                    <div className="form-groupp message">
                        <input type="text" className="form-controll"
                            onChange={messageChange}
                            value={message}
                            id="message"
                            placeholder="share your querry"
                            required
                            autocomplete="off" />
                        <label htmlFor="message" className="form-labell">Message</label>
                    </div>

                    <input type="submit"
                        onClick={
                            () => sendMessage()
                        }
                        value="Submit"
                        className="submit-blue" />
                </div>
            </div>


        </>
    )
}

export default ContactUs;
