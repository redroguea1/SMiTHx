import React from 'react'
import { Link } from 'react-router-dom'
import { Component } from 'react';


export default function NavBar() {
  return (
      <nav>
          <Link to="/">EventListPage</Link>
          &nbsp; | &nbsp;
          <Link to="/orgs">OrgListPage</Link>
      </nav>
  )
}
