import React from 'react'
import Login from './pages/login/login'
import Signup from './pages/signup/signup'
import Auth from './routes/auth'
import Private from './routes/private'
import Dashboard from './pages/dashboard/dashboard'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
  <Routes>
    <Route  element={<Auth />}>
    <Route  path='/'  element={< Signup /> } />
    <Route  path='/login'  element={< Login />}   />
    </Route>

    <Route element={<Private />}>

    <Route  path='/dashboard'  element={<Dashboard/>} />
    </Route>
  
  </Routes>
  
    </div>
  )
}

export default App