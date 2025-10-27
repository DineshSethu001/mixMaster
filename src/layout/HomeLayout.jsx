import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components'

const HomeLayout = () => {
  return (
    <div className=''>
        <Navbar/>
        <section className="page">
            <Outlet />
        </section>
    </div>
  )
}

export default HomeLayout