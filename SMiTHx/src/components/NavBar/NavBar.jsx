import React from 'react'
import { Link } from 'react-router-dom'
import { Component } from 'react';
import "./NavBar.css"
import UserLogOut from '../../components/UserLogOut/UserLogOut'

export default function NavBar({user}) {
  return (
      <nav className="NavBar">SMiTHx
        &nbsp; | &nbsp;
          <Link to="/">EventListPage</Link>
          &nbsp; | &nbsp;
          <Link to="/calendar">DayListPage</Link>
          &nbsp; | &nbsp;
          <UserLogOut />
          &nbsp; | &nbsp;
          User: {user.name}
      </nav>
  )
}
