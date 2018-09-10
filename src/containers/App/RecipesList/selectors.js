const selectRecipes = state => state.recipeBook.recipes.map(recipe => ({
  name: recipe.name,
  id: recipe.id,
}));

export default selectRecipes;
