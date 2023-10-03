import React from 'react'
import "./PriviewPostCard.css"
import { Link } from 'react-router-dom'
function PriviewPostCard({ id, blogTitle, blogdata, blogContent, follower, Articalperweek, revelence, urlimage }) {
    return (
        <div className='priview-post-card'>

            <div className='title-button'> <h3>{blogTitle}</h3>
                <button className='btn-read-now'><Link to={`/post/read/${id}`} className='btn-text'>READ MORE</Link></button></div>
            <div className='blog-flex'>
                <div> <p>{blogdata}</p>
                    <p>{blogContent}</p></div>
                <div className='img-rss'><img src={urlimage} alt='rss feed' /></div>
            </div>
            <div className='reviews'>
                <p>{follower}</p>
                <p>{Articalperweek}</p>
                <p>{revelence}</p>
            </div>
        </div>
    )
}

export default PriviewPostCard