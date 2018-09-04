import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteRecipeActionCreator, editRecipeActionCreator } from './actions';
import getRecipe from './selectors';

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
  recipe: getRecipe(state),
});

const mapDispatchToProps = {
  deleteRecipe: deleteRecipeActionCreator,
  editRecipe: editRecipeActionCreator,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailedRecipe);
