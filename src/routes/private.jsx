import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function Private() {
  return (
  localStorage.getItem("uid") ? <Outlet/> : <Navigate to={"/"}/>
  )
}

export default Private
