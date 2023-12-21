import React from 'react';
import './Article.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Article = (props) => {
    const { blogPicture, authorPicture, name, blogTitle, date, time, tags } = props.article;
    const boockmarkHandler = props.boockmarkHandler;
    const handlerRead = props.handlerRead;

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
                    <p>{time} min read <button onClick={() => boockmarkHandler(props.article)} className='bookmark-button'>
                        <FontAwesomeIcon icon={faBookmark} />
                    </button></p>
                </div>
            </div>

            {/* blog title */}
            <h2 className='blog-title'>{blogTitle}</h2>
            <p>{tags}</p>
            <button onClick={() => handlerRead(props.article)} className='btn-make-read'>Make as read</button>
            <hr className='hr-devider' />
        </div>
    );
};

export default Article;