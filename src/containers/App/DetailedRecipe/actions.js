export const deleteRecipe = recipeId => ({
  type: 'DELETE_RECIPE',
  id: recipeId,
});

export const editRecipe = ({ id, name, ingredients, directions }) => ({
  type: 'SHOW_EDIT_FORM',
  id,
  name,
  ingredients,
  directions,
});
