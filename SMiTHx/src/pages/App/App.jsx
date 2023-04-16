import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import './App.css'
import NavBar from '../../components/NavBar/NavBar'
import AuthPage from '../AuthPage/AuthPage'

function App() {
  const [user, setUser] = useState([])

  return (
    <main className="App">SMiTHx

    { user ?
      <NavBar />
      :
      <AuthPage />
    }
    
    {/* NAV - events and organizations DONE user state - PENDING Body - event list and day view - TBD Footer - quotes with an API - TBD*/}

    </main>
  )
}

export default App
