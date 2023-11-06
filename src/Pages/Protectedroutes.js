import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Protectedroutes = () => {
    const auth = localStorage.getItem('user')
  return auth ? <Outlet/> : <Navigate to='register'/>
}

export default Protectedroutes