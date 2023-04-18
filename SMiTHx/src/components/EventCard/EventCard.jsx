import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


export default function EventCard({event, idx}) {
    //const {eventID} = useParams();
    //ADD Styling for my list here through div style like in movies ??
    // IS MY EVENT double wrapped? 
  return (
     <>
        <div className="EventCard">
              <div>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <div>📅 {event.date}</div>
                  <Link to={{ pathname:`/orgs/${event.org}` }}>{event.org}</Link>
              </div>
        </div>
    </>
  )
}
