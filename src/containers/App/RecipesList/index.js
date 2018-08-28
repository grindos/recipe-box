import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onClick } from './actions';
import { showAddForm } from '../actions';

class RecipesList extends Component {
  render() {
    const { onClick, showAddForm, recipes } = this.props;
    return (
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
          <div
            className="Recipe"
            key={`recipe-id-${recipe.id}`}
            onClick={e => {
              e.preventDefault();
              onClick(recipe.id);
            }}
          >
            {recipe.name}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  recipes: state.recipes.map(recipe => ({
    name: recipe.name,
    id: recipe.id,
  })),
});

const mapDispatchToProps = (dispatch) => ({
  onClick: recipeId => {
    dispatch(onClick(recipeId));
  },
  showAddForm: () => {
    dispatch(showAddForm());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);
