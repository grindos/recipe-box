import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addRecipeActionCreator, editRecipeActionCreator } from './actions';
import { hideFormActionCreator } from '../actions';
import { HIDE, ADD, EDIT } from '../../../constants';

const RecipeForm = ({ form, hideForm, addRecipe, editRecipe }) => {
  const { id, status, name, ingredients, directions } = form;
  let nameInput;
  let ingredientsInput;
  let directionsInput;

  if (status === HIDE) {
    return null;
  }
  return (
    <div>
      <form className="ModalForm">
        <h3>Recipe name</h3>
        <input
          id="name"
          type="text"
          defaultValue={status === EDIT ? name : ''}
          ref={node => {
            nameInput = node;
          }}
        />
        <h3>Ingredients</h3>
        <textarea
          rows="10"
          cols="40"
          defaultValue={status === EDIT ? ingredients.join('\n') : ''}
          ref={node => {
            ingredientsInput = node;
          }}
        />
        <h3>Directions</h3>
        <textarea
          rows="10"
          cols="40"
          defaultValue={status === EDIT ? directions.join('\n') : ''}
          ref={node => {
            directionsInput = node;
          }}
        />
        <input
          type="submit"
          value="Submit"
          onClick={e => {
            e.preventDefault();
            hideForm();
            switch (status) {
              case ADD:
                addRecipe({
                  name: nameInput.value,
                  ingredients: ingredientsInput.value.split('\n'),
                  directions: directionsInput.value.split('\n'),
                });
                break;
              case EDIT:
                editRecipe({
                  id,
                  name: nameInput.value,
                  ingredients: ingredientsInput.value.split('\n'),
                  directions: directionsInput.value.split('\n'),
                });
                break;
              default:
                break;
            }
          }}
        />
      </form>
      <div
        className="ModalOverlay"
        role="button"
        tabIndex="0"
        onClick={() => {
          hideForm();
        }}
        onKeyPress={() => {
          hideForm();
        }}
      />
    </div>
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

const mapDispatchToProps = {
  hideForm: hideFormActionCreator,
  addRecipe: addRecipeActionCreator,
  editRecipe: editRecipeActionCreator,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm);
