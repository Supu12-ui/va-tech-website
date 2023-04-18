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

const Vision = () => {
    const [display, setDisplay] = useState(1);
    return (
        <>
            <div className="services">
                <div className="services-content">

                    <span className="remaining-span">
                        <span className="span">Vision
                        </span>
                        {'\u00A0'}& values</span>

                    <div className='services-head'>Empower and help enterprises to grow</div>

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
                                Customer First</span>
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
                                Be Passionate</span>
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
                                Accountable</span>
                        </li>
                        <li onClick={
                                () => setDisplay(4)
                            }
                            className="services-li">
                            <span className="icon"><FaHeadSideVirus/></span>
                            <span className={
                                display == 4 ? "highlight" : "notHighlight"
                            }>
                                Collaborate</span>
                        </li>
                        <li onClick={
                                () => setDisplay(5)
                            }
                            className="services-li">
                            <span className="icon"><MdOutlineCheck/>
                            </span>
                            <span className={
                                display == 5 ? "highlight" : "notHighlight"
                            }>
                                Integrity</span>
                        </li>

                    </ul>

                    <Link to='/contactus'>
                        <button className="btn-1 btn-explore" style={{borderRadius:'10vmax'}}>Contact Us</button>
                    </Link>
                </div>
                <div className="services-img-content">
                    <div className={
                        display == 1 ? "display" : "notShow"
                    }>
                        <div className="services-img shrink">
                            <img src={Img1}
                                alt="Img1"/>
                            <img src={Img2}
                                alt="Img2"/>
                        </div>
                        <div className="services-img-text">


                            <div className='services-head'>Customer First</div>
                            <div className='services-desc'>The product life cycle at VAtech, is a blended composition of our technical expertise with best practices across industries to develop products attaining larger markets share and fetching greater ROI to our customers.</div>
                        </div>
                    </div>
                    <div className={
                        display == 2 ? "display" : "notShow"
                    }>
                        <div className="services-img shrink">
                            <img src={Img3}
                                alt="Img1"/>
                            <img src={Img4}
                                alt="Img2"/>
                        </div>
                        <div className="services-img-text">

                            <div className='services-head'>Be Passionate</div>
                            <div className='services-desc'>The product life cycle at VAtech, is a blended composition of our technical expertise with best practices across industries to develop products attaining larger markets share and fetching greater ROI to our customers.</div>
                        </div>
                    </div>
                    <div className={
                        display == 3 ? "display" : "notShow"
                    }>
                        <div className="services-img shrink">
                            <img src={Img5}
                                alt="Img1"/>
                            <img src={Img6}
                                alt="Img2"/>
                        </div>
                        <div className="services-img-text">

                            <div className='services-head'>Accountable</div>
                            <div className='services-desc'>The product life cycle at VAtech, is a blended composition of our technical expertise with best practices across industries to develop products attaining larger markets share and fetching greater ROI to our customers.</div>
                        </div>
                    </div>
                    <div className={
                        display == 4 ? "display" : "notShow"
                    }>
                        <div className="services-img shrink">
                            <img src={Img7}
                                alt="Img1"/>
                            <img src={Img8}
                                alt="Img2"/>
                        </div>
                        <div className="services-img-text">


                            <div className='services-head'>Collaborate</div>
                            <div className='services-desc'>The product life cycle at VAtech, is a blended composition of our technical expertise with best practices across industries to develop products attaining larger markets share and fetching greater ROI to our customers.</div>
                        </div>
                    </div>
                    <div className={
                        display == 5 ? "display" : "notShow"
                    }>
                        <div className="services-img shrink">
                            <img src={Img9}
                                alt="Img1"/>
                            <img src={Img10}
                                alt="Img2"/>
                        </div>
                        <div className="services-img-text">


                            <div className='services-head'>Integrity</div>
                            <div className='services-desc'>The product life cycle at VAtech, is a blended composition of our technical expertise with best practices across industries to develop products attaining larger markets share and fetching greater ROI to our customers.</div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Vision;
