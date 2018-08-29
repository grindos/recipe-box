import React from 'react';
import DetailedRecipe from './DetailedRecipe';
import RecipesList from './RecipesList';
import RecipeForm from './RecipeForm';

const App = () => (
  <div>
    <h1>Recipe Box</h1>
    <RecipesList />
    <DetailedRecipe />
    <RecipeForm />
  </div>
);

export default App;
