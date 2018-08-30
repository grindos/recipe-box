import React from 'react';
import DetailedRecipe from './DetailedRecipe';
import RecipesList from './RecipesList';
import RecipeForm from './RecipeForm';

const App = () => (
  <div className="App">
    <h1>Recipe Box</h1>
    <div className="AppContainer">
      <RecipesList />
      <DetailedRecipe />
    </div>
    <RecipeForm />
  </div>
);

export default App;
