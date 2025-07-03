import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import {ToastContainer} from 'react-toastify'
import Footer from './Footer'

const Layout = () => {
  return (
    <div>
        <ToastContainer position='top-center'/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout