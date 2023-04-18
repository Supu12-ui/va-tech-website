import React, {useState} from 'react';
import img1 from "../../Assets/Images/Services/1.png"
import img2 from "../../Assets/Images/Services/2.jpg"
import Testimonial from './Testimonial';
import '../../Assets/Styles/Testimonial.css';
import {BsArrowRight} from 'react-icons/bs';
import {BsArrowLeft} from 'react-icons/bs';

const Testimonials = () => {
    const testimonial = [
        {
            id: 1,
            head: "Free,enterprise-level support",
            desc: "Get to know how we work, who we are and what we value on this all means beautiful web page",
            img: img1,
            userName: "Akshara Pandey",
            userDesc: "User Experience at Google"
        }, {
            id: 2,
            head: "Free,enterprise-level support",
            desc: "Get to know how we work, who we are and what we value on this all means beautiful web page",
            img: img2,
            userName: "Ankit Jain",
            userDesc: "Product Designer at Apple"
        }
    ]

    const onLeftArrow = () => {
        if (final > 1) {
            setfinal(final - 1);
        }
        if (initial > 0) {
            setinitial(initial - 1);
        }
    }
    const onRightArrow = () => {
        if (final < testimonialLength - 1) {
            setfinal(final + 1);
        }
        if (initial < testimonialLength - 2) {
            setinitial(initial + 1);
        }
    }


    const [initial, setinitial] = useState(0);
    const [final, setfinal] = useState(1);
    const testimonialLength = testimonial.length;
    return (
        <>
            <div className='main-testimonials'>
                <div className='testimonial-head' >
                    Testimonials
                </div>
                <div className='testimonial-cards'>
                    <div className='arrow-left-testimonial arrow-testimonial'
                        onClick={
                            () => {
                                onLeftArrow()
                            }
                    }>
                        <BsArrowLeft size={25}/>
                    </div>
                    {
                    testimonial.map((test, index) => {
                        if (index >= initial && index <= final) {
                            return (
                                <div key={
                                    test.id
                                }>
                                    <Testimonial head={
                                            test.head
                                        }
                                        desc={
                                            test.desc
                                        }
                                        img={
                                            test.img
                                        }
                                        userName={
                                            test.userName
                                        }
                                        userDesc={
                                            test.userDesc
                                        }/>
                                </div>
                            )
                        }
                    })
                }
                    <div className='arrow-right-testimonial arrow-testimonial'
                        onClick={
                            () => {
                                onRightArrow()
                            }
                    }>

                        <BsArrowRight size={25}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Testimonials;
