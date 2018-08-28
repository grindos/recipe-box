import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecipe, editRecipe } from './actions';
import { hideForm } from '../actions';

class RecipeForm extends Component {
  render() {
    const { form, hideForm, addRecipe, editRecipe } = this.props;
    const { id, status, name, ingredients, directions } = form;
    let nameInput;
    let ingredientsInput;
    let directionsInput;

    if (status === 'HIDE') {
      return null;
    }
    return (
      <form>
        <label htmlFor="name">Recipe name</label>
        <input
          id="name"
          type="text"
          defaultValue={status === 'EDIT' ? name : ''}
          ref={node => {
            nameInput = node;
          }}
        />
        <label htmlFor="ingredients">Ingredients</label>
        <input
          id="ingredients"
          type="text"
          defaultValue={status === 'EDIT' ? ingredients.join('*') : ''}
          ref={node => {
            ingredientsInput = node;
          }}
        />
        <label htmlFor="directions">Directions</label>
        <input
          id="directions"
          type="text"
          defaultValue={status === 'EDIT' ? directions.join('*') : ''}
          ref={node => {
            directionsInput = node;
          }} />
        <input
          type="submit"
          value="Submit"
          onClick={e => {
            e.preventDefault();
            hideForm();
            console.log(status);
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
  }
}

const mapStateToProps = (state) => ({
  form: state.form
});

const mapDispatchToProps = (dispatch) => ({
  hideForm: () => {
    dispatch(hideForm());
  },
  addRecipe: (recipe) => {
    dispatch(addRecipe(recipe));
  },
  editRecipe: (recipe) => {
    dispatch(editRecipe(recipe));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm);
