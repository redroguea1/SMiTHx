import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import './App.css'
import NavBar from '../../components/NavBar/NavBar'
import AuthPage from '../AuthPage/AuthPage'
import EventListPage from '../EventListPage/EventListPage'
import OrgListPage from '../OrgListPage/OrgListPage'
import Footer from '../../components/Footer/Footer'
import { events } from '../../../data'
import { getUser } from '../../utilities/users-service'

function App() {
  
  const [user, setUser] = useState([]) //need to update useState to getUser

  return (
    <main className="App">SMiTHx

    { user ?
      <>
        <NavBar />
        <Routes>
          {/* HERE Will go the routes */}
          <Route path="/" element={<EventListPage events={events}/>} />
          <Route path="/orgs" element={<OrgListPage />} />
        </Routes>
      </>
      :
      <AuthPage setUser={setUser}/>
    }
    
    {/* NAV - events and organizations DONE user state - PENDING Body - event list and day view - TBD Footer - quotes with an API - TBD*/}
    <Footer/>
    </main>
  )
}

export default App
