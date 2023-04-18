import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {HiOutlinePencilAlt} from "react-icons/hi";
import {MdMobileFriendly, MdOutlineCheck} from "react-icons/md";
import {FaLaptopCode, FaHeadSideVirus, FaHeadset} from "react-icons/fa";
import Img1 from '../../Assets/Images/Services/1.png';
import Img2 from '../../Assets/Images/Services/2.jpg';
import Img3 from '../../Assets/Images/Services/3.png';
import Img4 from '../../Assets/Images/Services/4.png';
import Img5 from '../../Assets/Images/Services/5.jpg';
import Img6 from '../../Assets/Images/Services/6.png';
import Img7 from '../../Assets/Images/Services/7.png';
import Img8 from '../../Assets/Images/Services/8.png';
import Img9 from '../../Assets/Images/Services/9.png';
import Img10 from '../../Assets/Images/Services/10.png';

const Services = () => {
    const [display, setDisplay] = useState(1);
    return (
        <>
            <div className="services">
                <div className="services-content">

                    <span className="remaining-span">
                        <span className="span">Our
                        </span>
                        {'\u00A0'}services</span>

                    <div className='services-head'>Tech services offered by vatech</div>

                    <ul>
                        <li onClick={
                                () => setDisplay(1)
                            }
                            className="services-li">
                            <span className="icon"><HiOutlinePencilAlt/>
                            </span>
                            <span className={
                                display == 1 ? "highlight" : "notHighlight"
                            }>
                                UX/UI Design</span>
                        </li>
                        <li onClick={
                                () => setDisplay(2)
                            }
                            className="services-li">
                            <span className="icon"><MdMobileFriendly/>
                            </span>
                            <span className={
                                display == 2 ? "highlight" : "notHighlight"
                            }>
                                Mobile App Development</span>
                        </li>
                        <li onClick={
                                () => setDisplay(3)
                            }
                            className="services-li">
                            <span className="icon"><FaLaptopCode/>
                            </span>
                            <span className={
                                display == 3 ? "highlight" : "notHighlight"
                            }>
                                Web App Development</span>
                        </li>
                        <li onClick={
                                () => setDisplay(4)
                            }
                            className="services-li">
                            <span className="icon"><FaHeadSideVirus/></span>
                            <span className={
                                display == 4 ? "highlight" : "notHighlight"
                            }>
                                Chatbot & Machine Learning</span>
                        </li>
                        <li onClick={
                                () => setDisplay(5)
                            }
                            className="services-li">
                            <span className="icon"><MdOutlineCheck/></span>
                            <span className={
                                display == 5 ? "highlight" : "notHighlight"
                            }>
                                QA & Testing Services</span>
                        </li>
                        <li onClick={
                                () => setDisplay(6)
                            }
                            className="services-li">
                            <span className='icon'><FaHeadset/>
                            </span>
                            <span className={
                                display == 6 ? "highlight" : "notHighlight"
                            }>
                                Support & Maintenance</span>
                        </li>
                    </ul>

                    <Link to='WhatWeDo'>
                        <button className="btn-1 btn-explore" style={{borderRadius:'15vmax'}}>Explore all Services</button>
                    </Link>
                </div>
                <div className="services-img-content">
                    <div className={
                        display == 1 ? "display" : "notShow"
                    }>
                        <div className="services-img">
                            <img src={Img1}
                                alt="Img1"/>
                            <img src={Img2}
                                alt="Img2"/>
                        </div>
                        <div className="services-img-text">


                            <div className='services-head'>UX/UI Design</div>
                            <div className='services-desc'>The product life cycle at VAtech, is a blended composition of our technical expertise with best practices across industries to develop products attaining larger markets share and fetching greater ROI to our customers. The product life cycle at VAtech, is a blended composition of our technical expertise. The product life cycle at VAtech, is a blended composition of our technical expertise with best practices across industries to develop products attaining larger markets share and fetching greater ROI to our customers.</div>
                        </div>
                    </div>
                    <div className={
                        display == 2 ? "display" : "notShow"
                    }>
                        <div className="services-img">
                            <img src={Img3}
                                alt="Img1"/>
                            <img src={Img4}
                                alt="Img2"/>
                        </div>
                        <div className="services-img-text">

                            <div className='services-head'>Mobile App Development</div>
                            <div className='services-desc'>The product life cycle at VAtech, is a blended composition of our technical expertise with best practices across industries to develop products attaining larger markets share and fetching greater ROI to our customers. The product life cycle at VAtech, is a blended composition of our technical expertise. The product life cycle at VAtech, is a blended composition of our technical expertise with best practices across industries to develop products attaining larger markets share and fetching greater ROI to our customers.</div>
                        </div>
                    </div>
                    <div className={
                        display == 3 ? "display" : "notShow"
                    }>
                        <div className="services-img">
                            <img src={Img5}
                                alt="Img1"/>
                            <img src={Img6}
                                alt="Img2"/>
                        </div>
                        <div className="services-img-text">

                            <div className='services-head'>Web App Development</div>
                            <div className='services-desc'>The product life cycle at VAtech, is a blended composition of our technical expertise with best practices across industries to develop products attaining larger markets share and fetching greater ROI to our customers. The product life cycle at VAtech, is a blended composition of our technical expertise. The product life cycle at VAtech, is a blended composition of our technical expertise with best practices across industries to develop products attaining larger markets share and fetching greater ROI to our customers.</div>
                        </div>
                    </div>
                    <div className={
                        display == 4 ? "display" : "notShow"
                    }>
                        <div className="services-img">
                            <img src={Img7}
                                alt="Img1"/>
                            <img src={Img8}
                                alt="Img2"/>
                        </div>
                        <div className="services-img-text">


                            <div className='services-head'>Chatbot & Machine Learning</div>
                            <div className='services-desc'>The product life cycle at VAtech, is a blended composition of our technical expertise with best practices across industries to develop products attaining larger markets share and fetching greater ROI to our customers. The product life cycle at VAtech, is a blended composition of our technical expertise. The product life cycle at VAtech, is a blended composition of our technical expertise with best practices across industries to develop products attaining larger markets share and fetching greater ROI to our customers.</div>
                        </div>
                    </div>
                    <div className={
                        display == 5 ? "display" : "notShow"
                    }>
                        <div className="services-img">
                            <img src={Img9}
                                alt="Img1"/>
                            <img src={Img10}
                                alt="Img2"/>
                        </div>
                        <div className="services-img-text">


                            <div className='services-head'>QA & Testing Services</div>
                            <div className='services-desc'>The product life cycle at VAtech, is a blended composition of our technical expertise with best practices across industries to develop products attaining larger markets share and fetching greater ROI to our customers. The product life cycle at VAtech, is a blended composition of our technical expertise. The product life cycle at VAtech, is a blended composition of our technical expertise with best practices across industries to develop products attaining larger markets share and fetching greater ROI to our customers.</div>
                        </div>
                    </div>
                    <div className={
                        display == 6 ? "display" : "notShow"
                    }>
                        <div className="services-img">
                            <img src={Img1}
                                alt="Img1"/>
                            <img src={Img2}
                                alt="Img2"/>
                        </div>
                        <div className="services-img-text">


                            <div className='services-head'>Support & Maintenance</div>
                            <div className='services-desc'>The product life cycle at VAtech, is a blended composition of our technical expertise with best practices across industries to develop products attaining larger markets share and fetching greater ROI to our customers. The product life cycle at VAtech, is a blended composition of our technical expertise. The product life cycle at VAtech, is a blended composition of our technical expertise with best practices across industries to develop products attaining larger markets share and fetching greater ROI to our customers.</div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Services;
