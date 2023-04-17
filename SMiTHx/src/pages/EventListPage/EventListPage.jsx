import React from 'react'
import EventCard from '../../components/EventCard/EventCard'

export default function EventListPage({events}) {
  const eventsList = events.map((e, idx)=> 
    <EventCard event={e} index={idx}/>)

  return (
    <>
    <h1>Upcoming Events</h1>
    <ul>{eventsList}</ul>
    </>
  )
}
