import React from "react";
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

           
            <div className="support-2" style={{marginTop:"2vmax"}}>
                <div className="support-content" style={{marginTop:'10vmax'}}>

                    <span className="remaining-span">
                        <span className="span">our
                        </span>
                        {'\u00A0'}Support System</span>

                    <div className="support-head-2">The reasons of grow, we know from root</div>
                    <div className="support-sub-head-2">We have support staff on call 24/7 to support your needs.
                    </div>

                    <ul>
                        <li className="nav-btn1 services-li">
                            <span className="icon"><TbRocket/>
                            </span>
                            Fast working Progress</li>
                        <li className="nav-btn1 services-li">
                            <span className="icon"><AiOutlineBulb/>
                            </span>
                            Excellent Protection</li>
                        <li className="nav-btn1 services-li">
                            <span className="icon"><FaRegHandshake/>
                            </span>
                            Dedicated Team</li>
                        <li className="nav-btn1 services-li">
                            <span className="icon"><BsTelephone/>
                            </span>
                            24/7 Technical Support</li>
                    </ul>

                    <Link to='WhatWeDo'>
                        <button className="btn-1 btn-explore" style={{borderRadius:'2vmax'}}>Explore all Services</button>
                    </Link>
                </div>
                <div className="shrink support-img">
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
                        className="supportImg4 img-support-individual" style={{height:"20vmax",width:"40vmax"}}/>
                </div>

            </div>
        </>
    );
};

export default Support;
