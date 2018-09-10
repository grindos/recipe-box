import { v4 } from 'node-uuid';
import {
  ADD_RECIPE,
  EDIT_RECIPE,
  DELETE_RECIPE,
  RECIPE_CHOSEN,
  ADD,
  EDIT,
  SHOW_ADD_FORM,
  SHOW_EDIT_FORM,
  HIDE_FORM,
} from '../../constants';
import defaultState from './defaultState';

const getNextRecipeId = () => v4();

const recipeBook = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return {
        ...state,
        recipes: [
          ...state.recipes,
          {
            id: getNextRecipeId(),
            name: action.name,
            ingredients: action.ingredients,
            directions: action.directions,
          },
        ],
      };
    case EDIT_RECIPE:
      return {
        ...state,
        recipes: state.recipes.map(recipe => {
          if (recipe.id !== action.id) {
            return recipe;
          }
          const { id, name, ingredients, directions } = action;
          return {
            id,
            name,
            ingredients,
            directions,
          };
        }),
      };
    case DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter(recipe => recipe.id !== action.id),
      };
    case RECIPE_CHOSEN:
      return {
        ...state,
        chosenRecipe: action.id,
      };
    case SHOW_ADD_FORM:
      return {
        ...state,
        form: {
          status: ADD,
          id: null,
          name: '',
          ingredients: [],
          directions: [],
        },
      };
    case SHOW_EDIT_FORM:
      const { id, name, ingredients, directions } = action;
      return {
        ...state,
        form: {
          status: EDIT,
          id,
          name,
          ingredients,
          directions,
        },
      };
    case HIDE_FORM:
      return {
        ...state,
        form: { ...defaultState.form },
      };
    default:
      return state;
  }
};

export default recipeBook;
