const selectRecipes = state => state.recipes.map(recipe => ({
  name: recipe.name,
  id: recipe.id,
}));

export default selectRecipes;
