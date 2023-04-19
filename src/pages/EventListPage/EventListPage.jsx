import React from 'react'
import EventCard from '../../components/EventCard/EventCard'
import "./EventListPage.css"


export default function EventListPage({events}) {
  const eventsList = events.map((e, idx)=> 
    <EventCard event={e} index={idx}/>)

  return (
    <>
    <h2>Upcoming Events</h2>
    <ul className='eventsList'>{eventsList}</ul>
    </>
  )
}
