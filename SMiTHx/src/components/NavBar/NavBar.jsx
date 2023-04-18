import React from 'react'
import { Link } from 'react-router-dom'
import { Component } from 'react';


export default function NavBar({user}) {
  return (
      <nav>
        {/* add username display here A {} */}
          <Link to="/">EventListPage</Link>
          &nbsp; | &nbsp;
          <Link to="/calendar">DayListPage</Link>
      </nav>
  )
}
