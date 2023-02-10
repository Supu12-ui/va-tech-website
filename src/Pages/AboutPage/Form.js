import React, {useState} from "react";
import '../../Assets/Styles/About.css';
import {HiArrowNarrowRight} from "react-icons/hi";
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import {getFirestore, doc, setDoc} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js";


const Form = () => {

    const firebaseConfig = {
        apiKey: "AIzaSyCFx9B-z4VQDl0JG2264t8EsS5R5tm-p8k",
        authDomain: "va-tech-b5100.firebaseapp.com",
        projectId: "va-tech-b5100",
        storageBucket: "va-tech-b5100.appspot.com",
        messagingSenderId: "233003430207",
        appId: "1:233003430207:web:f7f4d0b41b763e18bea38a",
        measurementId: "G-P24ME1XMJ8"
    };

    const app = initializeApp(firebaseConfig);
    // Initialize Firebase
    const db = getFirestore();


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

    async function sendMessage() { // Adding time stamp and changing status
        let timeStamp = Date.now();
        let name = firstName + " " + lastName;
        await setDoc(doc(db, "contact", name), {
            time: new Date(timeStamp),
            name: name,
            email: email,
            contact: contact,
            message: message
        });
        setfirstName("")
        setlastName("")
        setemail("")
        setcontact("")
        setmessage("")

        alert("Message sent successfully");
    }

    return (
        <>
            <div className="form-comp-blue">
                <div className="form-content-blue">
                    <div className="form-header-blue">
                        Renovate unique Business Processes into Digitally Transformed
                                                                                    solutions with vatech Technosoft!
                    </div>
                    <div className="form-desc-blue">
                        Do you want to remove manual operations, acting as impediment to
                                                                                    your business growth? Realize your ideas into reliable web and
                                                                                    mobile software solutions with our professional services. Take first
                                                                                    step to launch your project by filling the form.
                    </div>
                    <span className="arrow-form-blue"
                        style={
                            {fontSize: "50px"}
                    }><HiArrowNarrowRight/></span>
                </div>
                <div className="form-blue">
                    <div className="form-line-blue">
                        <div className="form-group-blue">
                            <input type="text" className="form-control-blue" id="name"
                                value={firstName}
                                onChange={firstNameChange}
                                placeholder="Rupesh"
                                required
                                autocomplete="off"/>
                            <label for="name" className="form-label-blue">First Name</label>
                        </div>
                        <div className="form-group-blue">
                            <input type="text" className="form-control-blue" id="lastName"
                                value={lastName}
                                onChange={lastNameChange}
                                placeholder="Sinha"
                                required
                                autocomplete="off"/>
                            <label for="lastName" className="form-label-blue">Last Name</label>
                        </div>
                    </div>

                    <div className="form-line-blue">
                        <div className="form-group-blue">
                            <input type="email" className="form-control-blue" id="email"
                                value={email}
                                onChange={emailChange}
                                placeholder="vatech@gmail"
                                required
                                autocomplete="off"/>
                            <label for="email" className="form-label-blue">Email</label>
                        </div>
                        <div className="form-group-blue">
                            <input type="number" className="form-control-blue" id="number"
                                value={contact}
                                onChange={contactChange}
                                placeholder="+91987654321"
                                required
                                autocomplete="off"/>
                            <label for="number" className="form-label-blue">Contact Number</label>
                        </div>
                    </div>

                    <div className="form-group-blue message-blue">
                        <input type="text" className="form-control-blue" id="message"
                            value={message}
                            onChange={messageChange}
                            placeholder="share your querry"
                            required
                            autocomplete="off"/>
                        <label for="message" className="form-label-blue">Message</label>
                    </div>

                    <input type="submit"
                        onClick={
                            () => sendMessage()
                        }
                        value="Submit"
                        className="submit-blue"/>
                </div>
            </div>
        </>
    );
};

export default Form;
