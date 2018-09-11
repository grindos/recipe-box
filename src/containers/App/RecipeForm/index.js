import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { addRecipeActionCreator, editRecipeActionCreator } from './actions';
import { hideFormActionCreator } from '../actions';
import { HIDE, ADD, EDIT } from '../../../constants';
import selectForm from './selectors';

class RecipeForm extends Component {
  handleClick = e => {
    const { form, hideForm, addRecipe, editRecipe } = this.props;
    const { id, status } = form;
    e.preventDefault();
    hideForm();
    switch (status) {
      case ADD:
        addRecipe({
          name: this.nameInput.value,
          ingredients: this.ingredientsInput.value.split('\n'),
          directions: this.directionsInput.value.split('\n'),
        });
        break;
      case EDIT:
        editRecipe({
          id,
          name: this.nameInput.value,
          ingredients: this.ingredientsInput.value.split('\n'),
          directions: this.directionsInput.value.split('\n'),
        });
        break;
      default:
        break;
    }
  }

  render() {
    const { form, hideForm } = this.props;
    const { status, name, ingredients, directions } = form;

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
              this.nameInput = node;
            }}
          />
          <h3>Ingredients</h3>
          <textarea
            rows="10"
            cols="40"
            defaultValue={status === EDIT ? ingredients.join('\n') : ''}
            ref={node => {
              this.ingredientsInput = node;
            }}
          />
          <h3>Directions</h3>
          <textarea
            rows="10"
            cols="40"
            defaultValue={status === EDIT ? directions.join('\n') : ''}
            ref={node => {
              this.directionsInput = node;
            }}
          />
          <input
            type="submit"
            value="Submit"
            onClick={this.handleClick}
          />
        </form>
        <div
          className="ModalOverlay"
          role="button"
          tabIndex="0"
          onClick={hideForm}
          onKeyPress={hideForm}
        />
      </div>
    );
  }
}
RecipeForm.propTypes = {
  form: PropTypes.object,
  hideForm: PropTypes.func,
  addRecipe: PropTypes.func,
  editRecipe: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  form: selectForm,
});

const mapDispatchToProps = {
  hideForm: hideFormActionCreator,
  addRecipe: addRecipeActionCreator,
  editRecipe: editRecipeActionCreator,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm);
