import { createSelector } from 'reselect';

const selectRecipes = state => state.recipeBook.recipes;
const selectChosenRecipe = state => state.recipeBook.chosenRecipe;

const selectRecipe = createSelector(
  [selectRecipes, selectChosenRecipe],
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

export default selectRecipe;
