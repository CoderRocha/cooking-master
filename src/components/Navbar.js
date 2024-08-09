import React from 'react'
import { Link } from 'react-router-dom'

// styles
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/">
            <h1>Cooking Master</h1>
        </Link>
        <Link to="/create">Create a New Recipe</Link>
      </nav>
    </div>
  )
}
