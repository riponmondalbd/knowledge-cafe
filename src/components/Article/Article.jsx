import React from 'react';
import './Article.css'

const Article = (props) => {
    const { blogPicture, authorPicture, name, blogTitle, date, time, tags } = props.article;

    return (
        <div className='article-container'>
            {/* blog thumbnail */}
            <img className='blog-thumb' src={blogPicture} alt="" />

            {/* author details */}
            <div className="blog-details">
                <div className="author-details">
                    <img className='author-image' src={authorPicture} alt="" />
                    <div className="author-name-date">
                        <h3>{name}</h3>
                        <p>{date}</p>
                    </div>
                </div>
                <div className="read-time">
                    <p>{time} min read</p>
                </div>
            </div>

            {/* blog title */}
            <h2 className='blog-title'>{blogTitle}</h2>
            <p>{tags}</p>
            <button className='btn-make-read'>Make as read</button>
            <hr className='hr-devider' />
        </div>
    );
};

export default Article;