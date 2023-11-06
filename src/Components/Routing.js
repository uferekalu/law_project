import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contactus from '../Pages/Contactus'
import RegistrationForm from '../Pages/RegistrationForm'
import Login from '../Pages/Login'
import Protectedroutes from '../Pages/Protectedroutes'
import FrontPage from '../Pages/FrontPage'
import Clientlist from '../Pages/Clientlist'
import Newclient from '../Pages/Newclient'
import Caselist from '../Pages/Caselist/Caselist'
import Createcase from '../Pages/Createcase/Createcase'
import Dashboard from '../Dashboard'
import Chart  from '../Components/Chart'
const Routing = () => {
  return (
    <>
      <Routes>
      <Route element={<Protectedroutes/>}>
      <Route path='/' element={<FrontPage />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contactus />} />
        <Route path='/client' element={<Clientlist />} />
        <Route path='/newclient' element={<Newclient />} />
        <Route path='/caselist' element={<Caselist />} />
        <Route path='/createcase' element={<Createcase />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/chart' element={<Chart />} />
        <Route path='/login' element={<Login />} />
     
        </Route>
        <Route path='/register' element={<RegistrationForm />} />
    
      </Routes>
   
    </>
  )
}

export default Routing