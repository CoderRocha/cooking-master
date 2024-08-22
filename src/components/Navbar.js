import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme.js'

// styles
import './Navbar.css'

// components
import Searchbar from './Searchbar.js'

export default function Navbar() {
  const { color, changeColor } = useTheme()

  return (
    <div className="navbar" style={{ background: color }}>
      <nav onClick={() => changeColor('red')}>
        <Link to="/" className="brand">
            <h1>Cooking Master</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create a New Recipe</Link>
      </nav>
    </div>
  )
}
