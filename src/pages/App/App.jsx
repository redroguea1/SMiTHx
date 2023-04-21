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

  //Handles the Third Party API
    useEffect(() => {
      //use an annoymous function to call the getJoke/getQuote
      async function getJoke() {
        const randomJoke = await fetch(`${apiURL}`)
          .then(res => res.json());
        console.log(randomJoke.value);
        setJoke(randomJoke.value);
      }
      //need to call the function after you have declared it.
      getJoke()
    }, []);

    
  return (
    <main className="App">
    { user ?
      <>
        <NavBar user={user}/>
        <Routes>
          <Route path="/" element={<EventListPage events={events}/>} />
          <Route path="/orgs" element={<OrgListPage />} />
          <Route path="/calendar/" element={<DayListPage events={events} />} />
        </Routes>
        <Footer joke={joke}/>
      </>
      :
      <AuthPage setUser={setUser}/>
    }
    </main>
  )
}

export default App
