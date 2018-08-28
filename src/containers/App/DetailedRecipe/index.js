import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteRecipe, editRecipe } from './actions';

const getChosenRecipe = (recipes, id) => {
  const found = recipes.filter(recipe => recipe.id === id);
  if (found.length > 0) {
    return found[0];
  }
  return null;
}

class DetailedRecipe extends Component {
  render() {
    const { recipe, deleteRecipe, editRecipe } = this.props;
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
            Delete
          </button>
          <button
            className="EditButton"
            type="button"
            onClick={e => {
              e.preventDefault();
              editRecipe({id, name, ingredients, directions});
            }}
          >
            Edit
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
  }
}

const mapStateToProps = state => ({
  recipe: getChosenRecipe(state.recipes, state.chosenRecipe),
});

const mapDispatchToProps = dispatch => ({
  deleteRecipe: recipeId => {
    dispatch(deleteRecipe(recipeId));
  },
  editRecipe: recipe => {
    dispatch(editRecipe(recipe));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailedRecipe);
