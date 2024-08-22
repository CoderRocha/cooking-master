import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext.js'

// styles
import './Navbar.css'

// components
import Searchbar from './Searchbar.js'

export default function Navbar() {
  const { color } = useContext(ThemeContext)

  return (
    <div className="navbar" style={{ background: color }}>
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
