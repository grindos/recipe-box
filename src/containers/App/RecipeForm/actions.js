export const addRecipeActionCreator = ({ name, ingredients, directions }) => ({
  type: 'ADD_RECIPE',
  name,
  ingredients,
  directions,
});

export const editRecipeActionCreator = ({ id, name, ingredients, directions }) => ({
  type: 'EDIT_RECIPE',
  id,
  name,
  ingredients,
  directions,
});
