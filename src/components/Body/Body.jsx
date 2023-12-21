import React, { useEffect, useState } from 'react';
import './Body.css'
import Article from '../Article/Article';
import Bookmark from '../Bookmark/Bookmark';


const Body = () => {
    const [articles, setArticles] = useState([]);
    const [bookmark, setBookmark] = useState([]);
    const [time, setTime] = useState([]);

    useEffect(() => {
        fetch('customdb.json')
            .then(res => res.json())
            .then(data => setArticles(data))
    }, [])

    const boockmarkHandler = (article) => {
        let newBookmark = [];
        const exists = bookmark.find(blog => blog.id === article.id);
        if (!exists) {
            newBookmark = [...bookmark, article];
            setBookmark(newBookmark);
        }
        else {
            alert('already exist')
        }
    }
    const handlerRead = (article) => {
        const newTime = [...time, article];
        setTime(newTime);
    }


    return (
        <div className='body-container'>
            <div className="blog-container">
                {
                    articles.map(article => <Article
                        key={article.id}
                        article={article}
                        boockmarkHandler={boockmarkHandler}
                        handlerRead={handlerRead}
                    ></Article>)
                }
            </div>
            <div className="bookmark-section">
                <Bookmark
                    bookmark={bookmark}
                    time={time}
                ></Bookmark>
            </div>
        </div >
    );
};

export default Body;