import { useState, useEffect } from 'react'
import {Routes, Route} from "react-router-dom"
import './App.css'
import NavBar from '../../components/NavBar/NavBar'
import AuthPage from '../AuthPage/AuthPage'
import EventListPage from '../EventListPage/EventListPage'
import OrgListPage from '../OrgListPage/OrgListPage'
import Footer from '../../components/Footer/Footer'
import { events } from '../../../data'
//import { getUser } from '../../utilities/users-service'
import DayListPage from '../DayListPage/DayListPage'


function App() {
  
  const [user, setUser] = useState(null) //need to update useState to getUser
  //JOKE Will become quote ideally when the official app launches
  const apiURL = "https://api.chucknorris.io/jokes/random";
    const [joke, setJoke] = useState('');

    useEffect(() => {
      async function getJoke() {
        const randomJoke = await fetch(`${apiURL}`)
          .then(res => res.json());
        console.log(randomJoke.value);
        setJoke(randomJoke.value);
      }
      getJoke()
    }, []);

  

  return (
    <main className="App">
    { user ?
      <>
        <NavBar user={user}/>
        <Routes>
          {/* HERE Will go the routes */}
          <Route path="/" element={<EventListPage events={events}/>} />
          <Route path="/orgs" element={<OrgListPage />} />
          <Route path="/calendar/" element={<DayListPage events={events} />} />
        </Routes>
      </>
      :
      <AuthPage setUser={setUser}/>
    }
    
    {/* NAV - events and organizations DONE user state - PENDING Body - event list and day view - TBD Footer - quotes with an API - TBD*/}
    <Footer joke={joke}/>
    </main>
  )
}

export default App
