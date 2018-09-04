import { createSelector } from 'reselect';

const getRecipes = state => state.recipes;
const getChosenRecipe = state => state.chosenRecipe;

const getRecipe = createSelector(
  [getRecipes, getChosenRecipe],
  (recipes, chosenRecipe) => {
    const found = recipes.filter(recipe => recipe.id === chosenRecipe);
    if (found.length > 0) {
      return found[0];
    }
    if (recipes.length > 0) {
      return recipes[0];
    }
    return null;
  },
);

export default getRecipe;
