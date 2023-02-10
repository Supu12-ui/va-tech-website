import React from "react";
import img1 from "../../Assets/Images/google.jpg";
import img2 from "../../Assets/Images/sony.jpg";
import img3 from "../../Assets/Images/stack.jpg";
import img4 from "../../Assets/Images/microsoft.jpg";
import supportImg1 from "../../Assets/Images/supportImg1.jpg";
import supportImg2 from "../../Assets/Images/supportImg2.jpg";
import supportImg3 from "../../Assets/Images/supportImg3.jpg";
import supportImg4 from "../../Assets/Images/supportImg4.jpg";
import {TbRocket} from "react-icons/tb";
import {AiOutlineBulb} from "react-icons/ai";
import {FaRegHandshake} from "react-icons/fa";
import {BsTelephone} from "react-icons/bs";
import {Link} from 'react-router-dom';

const Support = () => {
    return (
        <>
            <div className="support">
                <div className="support-heading">
                    We work with some of the worlds{" "}
                    <span style={
                        {color: "blue"}
                    }>Leading{" "}</span>
                    companies.
                </div>


                <div className="img-container-company">
                    <img src={img1}
                        alt="google"/>
                    <img src={img2}
                        alt="sony"/>
                    <img src={img3}
                        alt="stack"/>
                    <img src={img4}
                        alt="microsoft"/>
                </div>
            </div>
            <div className="support-2">
                <div className="support-content">

                    <span className="remaining-span">
                        <span className="span">our
                        </span>
                        {'\u00A0'}Support System</span>

                    <div className="support-head-2">The reasons of grow, we know from root</div>
                    <div className="support-sub-head-2">We have support staff on call 24/7 to support your needs.
                    </div>

                    <ul>
                        <li className="services-li">
                            <span className="icon"><TbRocket/>
                            </span>
                            Fast working Progress</li>
                        <li className="services-li">
                            <span className="icon"><AiOutlineBulb/>
                            </span>
                            Excellent Protection</li>
                        <li className="services-li">
                            <span className="icon"><FaRegHandshake/>
                            </span>
                            Dedicated Team</li>
                        <li className="services-li">
                            <span className="icon"><BsTelephone/>
                            </span>
                            24/7 Technical Support</li>
                    </ul>

                    <Link to='WhatWeDo'>
                        <button className="btn-1 btn-explore">Explore all Services</button>
                    </Link>
                </div>
                <div className="support-img">
                    <div className="support-img-internal">
                        <img src={supportImg1}
                            alt=""
                            className="supportImg1 img-support-individual"/>
                        <div className="support-img-div-1">
                            <img src={supportImg2}
                                alt=""
                                className="supportImg2 img-support-individual"/>
                            <img src={supportImg3}
                                alt=""
                                className="supportImg3 img-support-individual"/>
                        </div>
                    </div>
                    <img src={supportImg4}
                        alt=""
                        className="supportImg4 img-support-individual"/>
                </div>

            </div>
        </>
    );
};

export default Support;
