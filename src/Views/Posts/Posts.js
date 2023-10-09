import React from 'react'
import blogdata from './../../Config/blogdata.json'
import "./Post.css"
import PriviewPostCard from '../../Component/PriviewPostCard/PriviewPostCard'
function Posts() {
  return (
    <div>
        <h1 className='heading'>Popular Mobile Blogs</h1>
        <div className='preview-post-card'> 
        {
            blogdata.map((post, index)=>{
           return(< PriviewPostCard key={index} id={post.id} blogTitle={post.blogTitle}
             blogdata={post.blogData} blogContent={post.blogContent} follower={post.follower}
              Articalperweek={post.Articalperweek} revelence={post.revelence} urlimage={post.urlimage}
              />)
})
        }
        </div>
    </div>
  )
}

export default Posts