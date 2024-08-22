import React from 'react'
import { Link } from 'react-router-dom'

// styles
import './Navbar.css'

// components
import Searchbar from './Searchbar.js'

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
            <h1>Cooking Master</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create a New Recipe</Link>
      </nav>
    </div>
  )
}
