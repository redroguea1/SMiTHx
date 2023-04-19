import React from 'react'
import { Link } from 'react-router-dom'
import { Component } from 'react';
import "./NavBar.css"
import UserLogOut from '../../components/UserLogOut/UserLogOut'

export default function NavBar({user}) {
  console.log(user)
  return (
      <nav className="NavBar">SMiTHx
        &nbsp; | &nbsp;
          <Link to="/">Events</Link>
          &nbsp; | &nbsp;
          <Link to="/calendar">Days/Calendar</Link>
          &nbsp; | &nbsp;
          <UserLogOut />
          &nbsp; | &nbsp;
          User: NAMEHERE...
      </nav>
  )
}
