import React from "react";
import {useParams} from 'react-router-dom';
import { recipes } from "./recipesData";
import "./App.css";

const Recipe = () => {
  const { slug } = useParams();
  const recipe = recipes.find(recipe => recipe.slug === slug);

  return (
    <div className="Recipes">
      <div>
        <img src={recipe.image} title={recipe.imageTitle} className="recipe-img" />
      </div>
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
      </div>
    </div>
  )
}

export default Recipe;