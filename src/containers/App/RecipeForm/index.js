import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addRecipeActionCreator, editRecipeActionCreator } from './actions';
import { hideFormActionCreator } from '../actions';

const RecipeForm = ({ form, hideForm, addRecipe, editRecipe }) => {
  const { id, status, name, ingredients, directions } = form;
  let nameInput;
  let ingredientsInput;
  let directionsInput;

  if (status === 'HIDE') {
    return null;
  }
  return (
    <form>
      <label htmlFor="name">
        Recipe name
        <input
          id="name"
          type="text"
          defaultValue={status === 'EDIT' ? name : ''}
          ref={node => {
            nameInput = node;
          }}
        />
      </label>
      <label htmlFor="ingredients">
        Ingredients
        <input
          id="ingredients"
          type="text"
          defaultValue={status === 'EDIT' ? ingredients.join('*') : ''}
          ref={node => {
            ingredientsInput = node;
          }}
        />
      </label>
      <label htmlFor="directions">
        Directions
        <input
          id="directions"
          type="text"
          defaultValue={status === 'EDIT' ? directions.join('*') : ''}
          ref={node => {
            directionsInput = node;
          }}
        />
      </label>
      <input
        type="submit"
        value="Submit"
        onClick={e => {
          e.preventDefault();
          hideForm();
          switch (status) {
            case 'ADD':
              addRecipe({
                name: nameInput.value,
                ingredients: ingredientsInput.value.split('*'),
                directions: directionsInput.value.split('*'),
              });
              break;
            case 'EDIT':
              editRecipe({
                id,
                name: nameInput.value,
                ingredients: ingredientsInput.value.split('*'),
                directions: directionsInput.value.split('*'),
              });
              break;
            default:
              break;
          }
        }}
      />
    </form>
  );
};
RecipeForm.propTypes = {
  form: PropTypes.object,
  hideForm: PropTypes.func,
  addRecipe: PropTypes.func,
  editRecipe: PropTypes.func,
};

const mapStateToProps = state => ({
  form: state.form,
});

const mapDispatchToProps = dispatch => ({
  hideForm: () => {
    dispatch(hideFormActionCreator());
  },
  addRecipe: recipe => {
    dispatch(addRecipeActionCreator(recipe));
  },
  editRecipe: recipe => {
    dispatch(editRecipeActionCreator(recipe));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm);
