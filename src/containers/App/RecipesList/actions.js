const recipeChosenActionCreator = recipeId => ({
  type: 'RECIPE_CHOSEN',
  id: recipeId,
});

export default recipeChosenActionCreator;
