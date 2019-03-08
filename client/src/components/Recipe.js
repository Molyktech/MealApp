import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const API_KEY = "6226712924b97a2f997b050dbad5c33c";

export default class Recipe extends Component {
  state = {
    clickedRecipe: ""
  };
  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const request = await fetch(
      `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`
    ) //the heroku tricks the api to think that we are making the call from a live server
      .then(response => {
        return response.json();
      })
      .then(data => {
        return data;
      })
      .catch(error => {
        return error;
      });
    this.setState({
      // clickedRecipe: this.state.clickedRecipe.concat(request.recipes[0])
      clickedRecipe: request.recipes[0]
    });

    console.log(this.state.clickedRecipe);
  };
  render() {
    let recipe = this.state.clickedRecipe;
    console.log(this.state.clickedRecipe.publisher);
    console.log(this.props);
    if (recipe.length < 1) {
      /// make this a set time out function so that when it doesnt fetch it returns a message

      return <Loader />;
    } else {
      return null;
    }
    return (
      <div className="container">
        {this.state.clickedRecipe.length !== 0 && (
          <div className="active-recipe">
            <img
              className="active-recipe-img"
              src={recipe.image_url}
              alt={recipe.title}
            />
            <h4 className="active-recipe-title">{recipe.title}</h4>
            <h5 className="active-recipe-publisher">
              Publisher: <span>{recipe.publisher}</span>
            </h5>
            <p className="active-recipe-website">
              Website:
              <span>
                <a href={recipe.publisher_url}>{recipe.publisher_url}</a>
              </span>
            </p>
            <button className="active-recipe-button">
              <Link to="/">Go Back</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}
