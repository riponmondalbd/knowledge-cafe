import React from 'react';
import './Bookmark.css'

const Bookmark = () => {
    return (
        <>
            <div className='bookmark-container-time-counter'>
                <h3 className='time-counter'>Spent time on read : min</h3>
            </div>
            <div className='bookmark-blog-counter'>
                <h3>Bookmarked Blogs : </h3>
                <p className='bookmark-blogs'>blogs</p>

            </div>
        </>
    );
};

export default Bookmark;