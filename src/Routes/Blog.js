import React, {useState} from 'react';
import Form from '../Pages/AboutPage/Form';
import imgMain from '../Assets/Images/blog.png';
import img1 from '../Assets/Images/1.png';
import img2 from '../Assets/Images/2.png';
import img3 from '../Assets/Images/3.png';
import img4 from '../Assets/Images/4.png';
import '../Assets/Styles/Blog.css';
import BlogCard from '../Pages/Blog/BlogCard';
import imageInfoOne from '../Assets/Images/blogInfo1.png';
import imageInfoTwo from '../Assets/Images/blogInfo2.png';

const Blog = () => {
    const blogCard = [
        {
            id: 1,
            image: img1,
            head: "How Digital Transformation is Disturbing the Education Sector Post COVID?",
            date: "24-06-2022",
            desc: "Get to know how we work, who we are and what we value on this all means beautiful web page. Get to know how we work, who we are and what we value on this all means beautiful web page..."
        }, {
            id: 2,
            image: img2,
            head: "How Digital Transformation is Disturbing the Education Sector Post COVID?",
            date: "24-06-2022",
            desc: "Get to know how we work, who we are and what we value on this all means beautiful web page. Get to know how we work, who we are and what we value on this all means beautiful web page..."
        }, {
            id: 3,
            image: img3,
            head: "How Digital Transformation is Disturbing the Education Sector Post COVID?",
            date: "24-06-2022",
            desc: "Get to know how we work, who we are and what we value on this all means beautiful web page. Get to know how we work, who we are and what we value on this all means beautiful web page..."
        }, {
            id: 4,
            image: img4,
            head: "How Digital Transformation is Disturbing the Education Sector Post COVID?",
            date: "24-06-2022",
            desc: "Get to know how we work, who we are and what we value on this all means beautiful web page. Get to know how we work, who we are and what we value on this all means beautiful web page..."
        }
    ]
    const [initial, setinitial] = useState(0);
    const [final, setfinal] = useState(4);

    return (
        <>

            <img src={imgMain}
                className="blog-image"
                alt="Blog Image"/>

            <div className="main-box">
                <div className='blog-container'>
                    <div className='blog-cards-all'>
                        <div className='blog-card'>
                            {
                            blogCard.map((card, index) => {
                                return (
                                    <div className='blog-card'
                                        key={
                                            card.id
                                    }>
                                        <BlogCard img={
                                                card.image
                                            }
                                            head={
                                                card.head
                                            }
                                            date={
                                                card.date
                                            }
                                            desc={
                                                card.desc
                                            }/>
                                        <button className="btn-1">Read More</button>
                                    </div>
                                );

                            })
                        } </div>
                    </div>
                    <div className='blog-info'>
                        <img src={imageInfoOne}
                            className="blog-info-image blog-info-image-one"/>
                        <div className='blog-categories'></div>
                        <img src={imageInfoTwo}
                            className="blog-info-image blog-info-image-two"/>
                    </div>
                </div>
            </div>
            <Form/>
        </>
    );
}
export default Blog;
