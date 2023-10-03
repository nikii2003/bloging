import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
function Home() {
  return (
<>
<div className='bg-image'>
      <h1 className='blog-heading'>Mobile Blogs </h1>
      <Link to="posts" className='post'>post</Link>
    </div>
</>
  )
}

export default Home