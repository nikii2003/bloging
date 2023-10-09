import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import blogdata from './../../Config/blogdata.json'
import  './Readpost.css'
function Readpost() {
  const {id} = useParams();

  const [post, setPost]=useState({})

 useEffect(()=>{
  blogdata.forEach((postObj)=>{
    if(postObj.id === id){
      setPost(postObj)
    }
  })
 },[id])
  return (
    <div>
      <h1>{post.blogTitle}</h1>
      <img src={post.urlimage} className='rss-feed-img'/>
      <div className='blog-content'>
      <p>{post.blogData}</p>
      <p>{post.blogContent}</p>
      <p>{post.Articalperweek}</p>
      <p className=''>{post.revelence}.....</p>
      <h2>{post.latestTitle}</h2>
      <p>{post.latest}</p>

      </div>
    </div>
  )
}

export default Readpost
