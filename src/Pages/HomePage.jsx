import React from 'react'
import Sidebar from '../components/Home/SideBar/Sidebar'
import Dashboard from '../components/Home/Dashboard/Dashboard'

const HomePage = () => {
  return (
    <div style={{display:"flex"}}>
        <Sidebar/>
        <Dashboard/>
    </div>
  )
}

export default HomePage