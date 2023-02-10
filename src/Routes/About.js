import React from 'react';
import Heading from '../Pages/AboutPage/Heading';
import Values from '../Pages/AboutPage/Values';
import Form from '../Pages/AboutPage/Form';
import Info from "../Pages/HomePage/Info";
import img2 from "../Assets/Images/contactImg.jpg";
import Rectangle2 from "../Assets/Images/Pattern/Rectangle2.jpg";
import Vision from '../Pages/AboutPage/Vision';

const About = () => {
    return (
        <>
            <div className='main-box' id='main-box-about'>
                <Heading/>
                <Values/>
                <Vision/>
            </div>
            <Form/>

            <div className='main-box'>
                <Info img={img2}
                    Rectangle={Rectangle2}
                    headText="What is Agile Development?"
                    subHeadText="Get to know how we work, who we are and what we value on this all means beautiful web page"/>
            </div>
        </>
    )
}

export default About;
