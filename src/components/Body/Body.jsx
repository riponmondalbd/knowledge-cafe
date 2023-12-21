import React, { useEffect, useState } from 'react';
import './Body.css'
import Article from '../Article/Article';
import Bookmark from '../Bookmark/Bookmark';


const Body = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('customdb.json')
            .then(res => res.json())
            .then(data => setArticles(data))
    }, [])
    return (
        <div className='body-container'>
            <div className="blog-container">
                {
                    articles.map(article => <Article
                        key={article.id}
                        article={article}
                    ></Article>)
                }
            </div>
            <div className="bookmark-section">
                <Bookmark></Bookmark>
            </div>
        </div>
    );
};

export default Body;