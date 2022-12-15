import React from "react";
import { Link } from "react-router-dom";
import {recipes} from "./recipesData";
import './App.css'
const Recipes = () => {
  return (
    <div>
      <h1>Recipes</h1>
      <div>
        {recipes.map(recipe => (
          <Card
            key={recipe.slug}
            title={recipe.title}
            slug={recipe.slug}
            description={recipe.description}
            image={recipe.image}
            imageTitle={recipe.imageTitle}
          />
        ))}
      </div>
    </div>
  );
}

const Card = ({ title, slug, description, image, imageTitle }) => {
  return (
    <div className="Recipes">
      <Link to={`/recipes/${slug}`}>
        <img title={imageTitle} src={image} alt={title} className="recipe-img"/>
      </Link>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to={`/recipes/${slug}`}>See Recipe</Link>
      </div>
    </div>
  );
}

export default Recipes;