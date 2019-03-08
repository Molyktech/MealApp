import React from "react";
import { Link } from "react-router-dom";

const Recipes = props => {
  return (
    <div className="container">
      <div className="row">
        {props.recipes.map(recipe => {
          return (
            <div
              key={recipe.title}
              className="col-md-4 "
              style={{ marginBottom: "2rem" }}
            >
              <div className="recipes-box">
                <img
                  src={recipe.image_url}
                  alt={recipe.title}
                  className="recipe-box-img"
                />
                <div className="recipe-text">
                  <h6 className="recipes-text">
                    {/* {recipe.title.length < 20
                      ? `${recipe.title}`
                      : `${recipe.title.substring(0, 25)}... `} */}
                    {recipe.title}
                  </h6>
                  <p className="recipes-subtitle">
                    Publisher: <span>{recipe.publisher}</span>
                  </p>
                </div>
                <button className="recipe_buttons">
                  <Link
                    to={{
                      pathname: `/recipe/${recipe.recipe_id}`,
                      state: { recipe: recipe.title }
                    }}
                  >
                    View Recipe
                  </Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recipes;
