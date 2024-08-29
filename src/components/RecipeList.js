import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import { projectFirestore } from '../firebase/config'

// styles
import './RecipeList.css'
import DeleteIcon from '../assets/delete-icon.svg'

export default function RecipeList({ recipes }) {
  const { mode } = useTheme()

  if (recipes.length === 0) {
    return <div className={`error ${mode}`}><p>No recipes to show...</p></div>
  }

  const handleClick = (id) => {
    projectFirestore.collection('recipes').doc(id).delete()
  }

  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <div key={recipe.id} className={`card ${mode}`}>
            <h3>{recipe.title}</h3>
            <p>{recipe.cookingTime} to make.</p>
            <div>{recipe.method.substring(0, 100)}...</div>
            <Link to={`/recipes/${recipe.id}`}><h1>Cook This</h1></Link>
            <img
              className="delete"
              src={DeleteIcon}
              alt="Delete Recipe Icon"
              onClick={() => handleClick(recipe.id)}
            />
        </div>
      ))}
    </div>
  )
}