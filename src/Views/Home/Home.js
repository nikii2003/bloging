import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import mobileimg from "./Top-10-Mobile-Brands-in-World.jpg"
function Home() {
  return (
<>
<div className='bg-image'>
      <h1 className='blog-heading'>Mobile Blogs </h1>
      <Link to="posts" className='post'>post</Link>
      <img src={ mobileimg} className='mobileimage'/>
    </div>
</>
  )
}

export default Home