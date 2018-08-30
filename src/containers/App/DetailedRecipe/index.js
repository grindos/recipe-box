import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteRecipeActionCreator, editRecipeActionCreator } from './actions';

const getChosenRecipe = (recipes, id) => {
  const found = recipes.filter(recipe => recipe.id === id);
  if (found.length > 0) {
    return found[0];
  }
  if (recipes.length > 0) {
    return recipes[0];
  }
  return null;
};

const DetailedRecipe = ({ recipe, deleteRecipe, editRecipe }) => {
  if (!recipe) {
    return null;
  }
  const { name, ingredients, directions, id } = recipe;
  return (
    <div className="DetailedRecipe">
      <div className="DetailedRecipeHeader">
        <h2>{name}</h2>
        <button
          className="DeleteButton"
          type="button"
          onClick={e => {
            e.preventDefault();
            deleteRecipe(id);
          }}
        >
          <span className="DeleteButtonIcon" />
        </button>
        <button
          className="EditButton"
          type="button"
          onClick={e => {
            e.preventDefault();
            editRecipe({ id, name, ingredients, directions });
          }}
        >
          <span className="EditButtonIcon" />
        </button>
      </div>
      <div className="DetailedRecipeText">
        <h3>Ingredients:</h3>
        <ul className="Ingredients">
          {ingredients.map(ingredient => <li>{ingredient}</li>)}
        </ul>
        <h3>Directions:</h3>
        <ol className="Directions">
          {directions.map(direction => <li>{direction}</li>)}
        </ol>
      </div>
    </div>
  );
};
DetailedRecipe.propTypes = {
  recipe: PropTypes.object,
  deleteRecipe: PropTypes.func,
  editRecipe: PropTypes.func,
};

const mapStateToProps = state => ({
  recipe: getChosenRecipe(state.recipes, state.chosenRecipe),
  anotherRecipeId: state.recipes.length > 0 ? state.recipes[0].id : null,
});

const mapDispatchToProps = dispatch => ({
  deleteRecipe: recipeId => {
    dispatch(deleteRecipeActionCreator(recipeId));
  },
  editRecipe: recipe => {
    dispatch(editRecipeActionCreator(recipe));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailedRecipe);
