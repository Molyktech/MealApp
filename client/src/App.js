import React, { Component } from "react";
import "./App.css";

import Form from "./components/Form";
import Recipes from "./components/Recipes";
import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import Content from "./components/Content";
import Home from "./components/Pages/Home";
const API_KEY = "6226712924b97a2f997b050dbad5c33c";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }
  getRecipe = async e => {
    e.preventDefault();
    //to access what is type in the input field, we get the name attribute of the input and store in a variable
    const recipeName = e.target.elements.recipeName.value;
    const api = await fetch(
      `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=9`
    ) //the heroku tricks the api to think that we are making the call from a live server
      .then(response => {
        return response.json();
      })
      .then(data => {
        return data.recipes;
      })
      .catch(error => {
        return error;
      });

    this.setState({ recipes: api });
    console.log(this.state.recipes);
  };

  componentDidMount = () => {
    //fetch whatever was stored in the local storage
    const localStorageJson = localStorage.getItem("recipes");

    const parsedRecipes = JSON.parse(localStorageJson); // change from the string that it is back to json
    this.setState({
      recipes: parsedRecipes
    });
  };

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes); //stringify because local storage only receives strings
    localStorage.setItem("recipes", recipes);
  };

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
        {/* <Header />
        <SideBar />
        <Content /> */}{" "}
        <Home />
      </div>
    );
  }
}

export default App;
