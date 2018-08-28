import React, { Component } from 'react';
import DetailedRecipe from './DetailedRecipe';
import RecipesList from './RecipesList';
import RecipeForm from './RecipeForm';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Recipe Box</h1>
        <RecipesList />
        <DetailedRecipe />
        <RecipeForm />
      </div>
    );
  }
}

export default App;