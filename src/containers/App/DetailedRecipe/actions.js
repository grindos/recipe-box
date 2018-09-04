import { DELETE_RECIPE, SHOW_EDIT_FORM } from '../../../constants';

export const deleteRecipeActionCreator = recipeId => ({
  type: DELETE_RECIPE,
  id: recipeId,
});

export const editRecipeActionCreator = ({ id, name, ingredients, directions }) => ({
  type: SHOW_EDIT_FORM,
  id,
  name,
  ingredients,
  directions,
});
