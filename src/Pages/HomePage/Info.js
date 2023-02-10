import React from 'react';
import Dots from '../../Assets/Images/Pattern/Dots.jpg';
import {Link} from 'react-router-dom';

const Info = ({img, Rectangle, headText, subHeadText}) => {
    return (
        <>
            <div className="contact">
                <div className="contact-img">
                    <img src={Dots}
                        alt="dots"
                        className="dots"/>
                    <img src={img}
                        alt="officeClip"
                        className="officeImg"/>
                    <img src={Rectangle}
                        alt="rectangle"
                        className="rectangle"/>
                </div>
                <div className="contact-content">
                    <div className='contact-content-head'>
                        {headText}</div>
                    <div className='contact-content-sub-head'>
                        {subHeadText}</div>
                    <Link to="contactus">
                        <button className="btn-2" id='btn-contactUs'>Contact Us</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Info;
