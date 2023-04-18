import React from 'react';
import '../../Assets/Styles/Home.css';
import img from "../../Assets/Images/Header-img.jpg";
import {Link} from 'react-router-dom';

const Heading = () => {
    return (
        <>
            <div className="heading" style={{marginLeft:'0vmax',marginTop:'5vmax'}}>
                <div className="content">
                    <div className='content-text'>
                        <span className="remaining-span">
                            <span className="span" >New way
                            </span>
                            {'\u00A0'}
                            to design web products</span>
                        <div className='content-head-text' style={{ marginTop:'8vmax'}}>BUILDING DIGITAL PRODUCTS WITH STYLE & EXPERIENCE</div>
                        <div className='content-sub-head-text' style={{ marginTop:'3vmax'}}>Get to know how we work, who we are and what we value on this all include beautiful web pages.</div>
                    </div>
                    <div className="btn-container">
                        <Link to="about">
                            <button className="btn-1" style={{borderRadius:"2vmax"}}>Get Started</button>
                        </Link>
                        <Link to="whatWeDo">
                            <button className="btn-2" id='btn-knowMore'style={{borderRadius:"2vmax",marginLeft:'10vmax'}} >Know More</button>
                        </Link>
                    </div>
                </div>
                <div className="heading-img">
                    
                </div>
            </div>

        </>
    )
}

export default Heading;
