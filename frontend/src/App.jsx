import { useState } from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import RegisterUser from './pages/RegisterUser.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Layout from './components/layout/Layout.jsx'
import { useAuth } from './context/AuthContext.jsx'

function App() {
  
  const {user, loading} = useAuth()
  
  if(loading) {
    return (
      <h1>loading!</h1>
    )
  }

  return (
      
      <Routes>
        
        <Route element={<Layout/>}>
          <Route path='/' element={
            user? <Navigate to="/home" /> : <Navigate to="/login"/>
            
          }/>
          <Route path='/register' element={<RegisterUser/>}/>
          <Route path='/login' element={<Login/>}/>
        </Route>
        <Route path='/home' element={
          user? <Home/>: <Navigate to="/login"/>
        }/>
      </Routes>
  )
}

export default App
