import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import recipeChosenActionCreator from './actions';
import { showAddFormActionCreator } from '../actions';

const RecipesList = ({ onClick, showAddForm, recipes }) => (
  <div className="RecipesList">
    <button
      type="button"
      onClick={e => {
        e.preventDefault();
        showAddForm();
      }}
    >
      Add
    </button>
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
);
RecipesList.propTypes = {
  onClick: PropTypes.func,
  showAddForm: PropTypes.func,
  recipes: PropTypes.array,
};

const mapStateToProps = state => ({
  recipes: state.recipes.map(recipe => ({
    name: recipe.name,
    id: recipe.id,
  })),
});

const mapDispatchToProps = dispatch => ({
  onClick: recipeId => {
    dispatch(recipeChosenActionCreator(recipeId));
  },
  showAddForm: () => {
    dispatch(showAddFormActionCreator());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);
