import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
      <nav>
          <Link to="/">EventListPage</Link>
          &nbsp; | &nbsp;
          <Link to="/">OrgListPage</Link>
      </nav>
  )
}
