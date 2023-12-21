import React from 'react';
import './Bookmark.css'

const Bookmark = (props) => {
    const bookmark = props.bookmark;
    const time = props.time;

    let totalReadTime = 0;
    for (const read of time) {
        totalReadTime = totalReadTime + read.time;
    }

    return (
        <>
            <div className='bookmark-container-time-counter'>
                <h3 className='time-counter'>Spent time on read :{totalReadTime} min</h3>
            </div>
            <div className='bookmark-blog-counter'>
                <h3>Bookmarked Blogs :{bookmark.length} </h3>
                {
                    bookmark.map(article => (
                        <p key={article.id}>{article.blogTitle}</p>
                    ))
                }


            </div>
        </>
    );
};

export default Bookmark;