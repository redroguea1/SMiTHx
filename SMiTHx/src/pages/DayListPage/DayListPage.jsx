import React from 'react'
import { events } from '../../../data'
import EventCard from '../../components/EventCard/EventCard'
import { useState } from 'react'

export default function DayListPage({events}) {
    //creating a day view of the events that is laidout differently+has buttons to scroll
    //toggle set Day view will be a blank EventCard
    //initiallizing dayview to an EventCard
    const [dayView, setDayView] = useState(events[0])
    const [dayElement, setDayElement] = useState(<EventCard event={dayView}/>)
    //create a style property for the card and assign divStyle
    const divStyle = {}

    //handleToggle will cycle through events and change dayview
    function handleToggle (evt){
        const tog = evt.target.value
        let idx = events.indexOf(dayView)
        if (tog === "next") {
            console.log("before next, index is: " + idx)
            if(idx >= events.length-1) {
                idx = 0;
                setDayView(events[idx])
                
                return
            }
            idx++
            setDayView(events[idx])
        } else if (tog === "prev" ) {
            idx--
            console.log(idx)
            if(idx < 0 ) {idx = events.length-1}
            setDayView(events[idx])
        }
        console.log(idx)
        setDayElement(<EventCard event={dayView}/>)
    }




    
  return (
    <>
    <button value="prev" onClick={handleToggle}>prev</button>
    <div>{dayElement}</div>
    <button value="next" onClick={handleToggle}>next</button>
    </>
  )
}
