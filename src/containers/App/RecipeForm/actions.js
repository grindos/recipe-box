export const addRecipe = ({ name, ingredients, directions }) => ({
  type: 'ADD_RECIPE',
  name,
  ingredients,
  directions,
});

export const editRecipe = ({ id, name, ingredients, directions }) => ({
  type: 'EDIT_RECIPE',
  id,
  name,
  ingredients,
  directions,
});
