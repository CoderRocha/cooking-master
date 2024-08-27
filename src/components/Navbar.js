import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme.js'

// styles
import './Navbar.css'
import cookingMasterIcon from '../assets/cooking-master-icon.png'

// components
import Searchbar from './Searchbar.js'

export default function Navbar() {
  const { color } = useTheme()

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
            <img
            src={cookingMasterIcon}
            alt="Cooking Master Logo"
            />
            <h1>Cooking Master</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create a New Recipe</Link>
      </nav>
    </div>
  )
}
