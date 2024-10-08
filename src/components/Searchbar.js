import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme.js'


// styles
import './Searchbar.css'

export default function Searchbar() {
    const [term, setTerm] = useState('')
    const navigate = useNavigate()

    const { mode } = useTheme()

    const handleSubmit = (e) => {
        e.preventDefault()
    
        navigate(`/search?q=${term}`)
    }

  return (
    <div className={`searchbar ${mode}`}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input
        type="text"
        id="search"
        onChange={(e) => setTerm(e.target.value)}
        required
        />
      </form>
    </div>
  )
}