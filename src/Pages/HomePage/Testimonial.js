import React, {useState} from 'react';
import '../../Assets/Styles/Testimonial.css';
import {ImQuotesLeft} from 'react-icons/im';

const Testimonial = ({
    head,
    desc,
    img,
    userName,
    userDesc
}) => {

    return (
        <>
            <div className="card-container">
                <div className='head-card'>
                    {head} </div>
                <div className="card-icon">
                    <ImQuotesLeft size={40}/>
                </div>
                <div className='card-desc'>
                    {desc} </div>
                <div className='card-user-info'>
                    <img src={img}
                        className='testimonial-img'/>
                    <div className='card-user'>
                        <div className='card-user-name'>
                            {userName} </div>
                        <div className='card-user-desc'>
                            {userDesc} </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Testimonial;
