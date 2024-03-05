import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import bob from "./assets/saturatedbob.png"

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Home from './components/Home.jsx'
import Catalogue from './components/Catalogue.jsx'
import PageLayout from './components/PageLayout.jsx'
import AboutUs from './components/AboutUs.jsx'
import ProductDetails from './components/ProductDetails.jsx'

const router = createBrowserRouter([
  {
    element: <PageLayout/>,
    children: [
    {
      path: '/',
      element: <Home/>,
    },
    {
      path: "/catalogue",
      element: <Catalogue/>,
    },
    {
      path: "/catalogue/:productId",
      element: <ProductDetails/>,
    },
    {
      path: "/aboutus",
      element: <AboutUs/>,
    },
    ],
    
    errorElement: <Link to='/'><img src={bob} className='w-full h-full'></img></Link>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
