import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { RecipeList, RecipeListItem } from "./components/RecipeList";
import { Container, Row, Col } from "./components/Grid";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import NewProduct from "./components/NewProduct";
class App extends Component {
  state = {
    recipes: [],
    recipeSearch: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getRecipes(this.state.recipeSearch)
      .then(res => {
        console.log(res.data);
        this.setState({ recipes: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/all" component={ProductList} />
          <Route exact path="/new" component={NewProduct} />
        </div>
      </Router>
    );
  }
}

export default App;
