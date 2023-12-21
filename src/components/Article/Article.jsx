import React from 'react';
import './Article.css'

const Article = (props) => {
    const { blogPicture, authorPicture, name, blogTitle, date, time, tags } = props.article;

    return (
        <div>
            <img src={blogPicture} alt="" />
            <div className="blog-details">
                <img src={authorPicture} alt="" />
                <div className="author-name-date">
                    <h3>{name}</h3>
                    <p>{date}</p>
                </div>
                <div className="read-time">
                    <p>{time} min read</p>
                </div>
            </div>
            <h2>{blogTitle}</h2>
            <p>{tags}</p>
        </div>
    );
};

export default Article;