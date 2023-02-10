import React, {useState} from 'react';
import Img1 from '../Assets/Images/Services/1.png';
import Img3 from '../Assets/Images/Services/3.png';
import Img6 from '../Assets/Images/Services/6.png';
import Img7 from '../Assets/Images/Services/7.png';
import Img8 from '../Assets/Images/Services/8.png';
import Img9 from '../Assets/Images/Services/9.png';
import {HiOutlinePencilAlt} from "react-icons/hi";
import {MdMobileFriendly, MdOutlineCheck} from "react-icons/md";
import {BsFillCartFill} from "react-icons/bs";
import {RiAngularjsFill, RiCustomerService2Fill} from "react-icons/ri";
import {GiHealthNormal} from "react-icons/gi";
import {GoLaw, GoGist} from "react-icons/go";
import {MdEmojiTransportation, MdSportsBasketball, MdDeveloperMode} from "react-icons/md";
import {
    SiChatbot,
    SiHiveBlockchain,
    SiReact,
    SiFlutter,
    SiJava,
    SiIos,
    SiXamarin,
    SiNodedotjs
} from "react-icons/si";
import {AiFillCloud, AiFillAndroid} from "react-icons/ai";
import {
    FaLaptopCode,
    FaHeadSideVirus,
    FaHeadset,
    FaFingerprint,
    FaStarOfLife
} from "react-icons/fa";
import Carousel from 'react-bootstrap/Carousel';


import '../Assets/Styles/WhatWeDo.css';
import '../Assets/Styles/common/common.css';
const WhatWeDo = () => {
    const [selected, setselected] = useState(1);

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <div className='main-box'>
                <div className="whatwedo-container">
                    <div className={
                        selected == 1 ? "whatwedo-image-section" : "notShow"
                    }>
                        <img src={Img9}
                            className="img-whatwedo"/>
                        <img src={Img3}
                            className="img-whatwedo"/>
                        <img src={Img6}
                            className="img-whatwedo"/>
                    </div>
                    <div className={
                        selected == 2 ? "whatwedo-image-section" : "notShow"
                    }>
                        <img src={Img3}
                            className="img-whatwedo"/>
                        <img src={Img8}
                            className="img-whatwedo"/>
                        <img src={Img3}
                            className="img-whatwedo"/>
                    </div>
                    <div className={
                        selected == 3 ? "whatwedo-image-section" : "notShow"
                    }>
                        <img src={Img6}
                            className="img-whatwedo"/>
                        <img src={Img7}
                            className="img-whatwedo"/>
                        <img src={Img8}
                            className="img-whatwedo"/>
                    </div>
                    <div className="whatwedo-content">
                        <div className="whatwedo-content-detail">
                            <div className='whatwedo-content-detail-headers'>
                                <div className={
                                        selected == 1 ? 'whatwedo-header selected' : "whatwedo-header"
                                    }
                                    onClick={
                                        () => setselected(1)
                                }>Services</div>
                                <div className={
                                        selected == 2 ? 'whatwedo-header selected' : "whatwedo-header"
                                    }
                                    onClick={
                                        () => setselected(2)
                                }>Technologies</div>
                                <div className={
                                        selected == 3 ? 'whatwedo-header selected' : "whatwedo-header"
                                    }
                                    onClick={
                                        () => setselected(3)
                                }>Industries</div>
                            </div>
                            <hr/>
                            <div className="whatwedo-content-detail-heading">
                                Deliver promises and commitments. Set challenging goals and achieve them
                            </div>
                            <div className="whatwedo-content-detail-description">
                                The product life cycle at VAtech, is a blended composition of our technical expertise with best practices across industries to develop products attaining larger markets share and fetching greater ROI to our customers.
                            </div>

                            <div className={
                                selected == 1 ? "whatwedo-content-detail-list" : "notShow"
                            }>
                                <ul>
                                    <li className="services-li">
                                        <span className="icon"><HiOutlinePencilAlt/>
                                        </span>
                                        <span>UX/UI Design</span>
                                    </li>
                                    <li className="services-li">
                                        <span className="icon"><MdMobileFriendly/>
                                        </span>
                                        <span>Mobile App Development</span>
                                    </li>
                                    <li className="services-li">
                                        <span className="icon"><FaLaptopCode/>
                                        </span>
                                        <span>Web App development</span>
                                    </li>
                                    <li className="services-li">
                                        <span className="icon"><FaHeadSideVirus/>
                                        </span>
                                        <span>Chatbot & Machine Learning</span>
                                    </li>
                                    <li className="services-li">
                                        <span className="icon"><MdOutlineCheck/>
                                        </span>
                                        <span>QA & Testing Services</span>
                                    </li>
                                    <li className="services-li">
                                        <span className="icon"><FaHeadset/></span>
                                        <span>Support and Maintenance</span>
                                    </li>
                                    <li className="services-li">
                                        <span className="icon"><BsFillCartFill/></span>
                                        <span>E-Commerce App Development</span>
                                    </li>
                                    <li className="services-li">
                                        <span className="icon"><SiChatbot/></span>
                                        <span>AI/ Machine Learning</span>
                                    </li>
                                    <li className="services-li">
                                        <span className="icon"><SiHiveBlockchain/></span>
                                        <span>Blockchain App Development</span>
                                    </li>
                                    <li className="services-li">
                                        <span className="icon"><AiFillCloud/></span>
                                        <span>Cloud Services</span>
                                    </li>
                                </ul>
                            </div>
                            <div className={
                                selected == 2 ? "whatwedo-content-detail-list" : "notShow"
                            }>
                                <ul>
                                    <li className="services-li">
                                        <span className="icon"><AiFillAndroid/></span>Android App Development</li>
                                    <li className="services-li">
                                        <span className="icon"><SiReact/></span>React Native Development</li>
                                    <li className="services-li">
                                        <span className="icon"><SiFlutter/></span>Flutter App development</li>
                                    <li className="services-li">
                                        <span className="icon"><RiAngularjsFill/></span>Angular JS Development</li>
                                    <li className="services-li">
                                        <span className="icon"><SiJava/></span>Java Development</li>
                                    <li className="services-li">
                                        <span className="icon"><SiIos/></span>iOS app development</li>
                                    <li className="services-li">
                                        <span className="icon"><SiXamarin/></span>Xamarin App Development</li>
                                    <li className="services-li">
                                        <span className="icon"><SiReact/></span>React JS Development</li>
                                    <li className="services-li">
                                        <span className="icon"><SiNodedotjs/></span>Node JS Development</li>
                                </ul>
                            </div>
                            <div className={
                                selected == 3 ? "whatwedo-content-detail-list" : "notShow"
                            }>
                                <ul>
                                    <li className="services-li">
                                        <span className="icon"><GiHealthNormal/></span>Healthcare</li>
                                    <li className="services-li">
                                        <span className="icon"><GoLaw/></span>Law Enforcement</li>
                                    <li className="services-li">
                                        <span className="icon"><MdEmojiTransportation/></span>Transportation</li>
                                    <li className="services-li">
                                        <span className="icon"><MdSportsBasketball/></span>Sports</li>
                                    <li className="services-li">
                                        <span className="icon"><GoGist/></span>GIS</li>
                                    <li className="services-li">
                                        <span className="icon"><FaFingerprint/></span>Biometrics</li>
                                </ul>
                            </div>
                        </div>

                        <div className="whatwedo-content-img">
                            <img src={Img1}
                                className="img-whatwedo-bottom"/>
                            <div className="whatwedo-content-img-carousal">

                                <Carousel activeIndex={index}
                                    onSelect={handleSelect}>
                                    <Carousel.Item>
                                        <div className='carousel-div'>
                                            <span className='icon' id='icon'><RiCustomerService2Fill/></span>
                                            <div className='carousel-head'>Customer First</div>
                                            <div className='carousel-desc'>The product life cycle at VAtech, is a blended composition of our technical expertise with best practices across industries to develop products attaining larger markets share and fetching greater ROI to our customers.</div>
                                        </div>
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <div className='carousel-div'>
                                            <span className='icon' id='icon'><FaStarOfLife/></span>
                                            <div className='carousel-head'>Project Life Cycle</div>
                                            <div className='carousel-desc'>Vatech is a full cycle development company that takes care of your business app right from ideation, prototyping, to rapidly launching an MVP in the market.</div>
                                        </div>
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <div className='carousel-div'>
                                            <span className='icon' id='icon'><MdDeveloperMode/></span>
                                            <div className='carousel-head'>Agile</div>
                                            <div className='carousel-desc'>QSS works Agile Methodology so as to provide the utmost visibility and transparency to our customers over projects controlling and monitoring timelines, risks and their mitigation strategies.</div>
                                        </div>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default WhatWeDo;
