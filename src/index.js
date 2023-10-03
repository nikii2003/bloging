import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Views/Home/Home';
import Readpost from './Views/Readpost/Readpost';
import Posts from './Views/Posts/Posts';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
  },
  {
    path:'/posts',
    element:<Posts/>,
  },
  {
    path:'/post/read/:id',
    element:<Readpost/>,
  },
  {
    path:'*',
    element:<div> 404 Not Found</div>
  }
])

root.render(
<RouterProvider router={router}/>
);

