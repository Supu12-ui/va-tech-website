import React from 'react';
import img from "../../Assets/Images/About-Head.jpg";
import {Link} from 'react-router-dom';

const Heading = () => {
    return (
        <>

            <div className="heading-about">
                <div className="about-content">
                    <span className="remaining-span">
                        <span className="span">who
                        </span>
                        {'\u00A0'}are we</span>
                    <div className='about-head'>We represent a team of intellectual and ethical professionals...</div>
                    <Link to="/whatWeDo">
                        <button className="btn-1 ">Know More</button></Link>
                    <div className="btn-container">
                    </div>
                </div>
                <div className="heading-about-img">
                    <img src={img}
                        alt="stock-img"/>
                </div>
            </div>

        </>
    )
}

export default Heading;
