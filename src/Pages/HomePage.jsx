import React, { useState } from 'react'
import Sidebar from '../components/Home/SideBar/Sidebar'
import Dashboard from '../components/Home/Dashboard/Dashboard'
import Analytics from '../components/Home/Analytics/Analytics';
import CreateQuiz from '../components/Home/CreateQuiz/CreateQuiz';
import useQuizContext from '../hooks/useQuizContext';
import Analysis from '../components/Home/Analytics/Analysis/Analysis';

const HomePage = () => {
  
  const {selectedMenu,showCreateQuiz} = useQuizContext();
  console.log("output of selected menu",selectedMenu);
  return (
    <div style={{display:"flex",height:"100vh",width:"100vw"}}>
        <Sidebar/>
        {showCreateQuiz && <CreateQuiz/>}
        <div style={{flex:1,padding:'20px'}}></div>
        {selectedMenu === 1 && <Dashboard/>}
        {selectedMenu === 2 && <Analytics/>}
        {/* {selectedMenu === 3 && <CreateQuiz/>} */}
        {selectedMenu === 4 && <Analysis/>}
    </div>
  )
}

export default HomePage