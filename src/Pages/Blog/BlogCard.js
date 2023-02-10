import React from 'react';

const BlogCard = ({img, head, desc, date}) => {
    return (
        <>
            <div className='blog-card-one'>
                <img src={img}
                    className="blog-image-card"/>
                <div className='blog-head'>
                    {head} </div>
                <div className='blog-date'>
                    {date} </div>
                <div className='blog-desc'>
                    {desc} </div>
            </div>
        </>
    );
}
export default BlogCard;
