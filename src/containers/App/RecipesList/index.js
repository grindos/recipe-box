import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import recipeChosenActionCreator from './actions';
import { showAddFormActionCreator } from '../actions';
import getRecipes from './selectors';

const RecipesList = ({ onClick, showAddForm, recipes }) => (
  <div className="RecipesList">
    <button
      className="AddButton"
      type="button"
      onClick={e => {
        e.preventDefault();
        showAddForm();
      }}
    >
      <span className="AddButtonIcon" />
    </button>
    <div className="Recipes">
      {recipes.map(recipe => (
        <button
          type="button"
          className="Recipe"
          key={`recipe-id-${recipe.id}`}
          onClick={e => {
            e.preventDefault();
            onClick(recipe.id);
          }}
          onKeyPress={e => {
            e.preventDefault();
            onClick(recipe.id);
          }}
        >
          {recipe.name}
        </button>
      ))}
    </div>
  </div>
);
RecipesList.propTypes = {
  onClick: PropTypes.func,
  showAddForm: PropTypes.func,
  recipes: PropTypes.array,
};

const mapStateToProps = state => ({
  recipes: getRecipes(state),
});

const mapDispatchToProps = {
  onClick: recipeChosenActionCreator,
  showAddForm: showAddFormActionCreator,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);
