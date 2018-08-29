export const showAddFormActionCreator = () => ({
  type: 'SHOW_ADD_FORM',
});

export const showEditFormActionCreator = ({ name, ingredients, directions }) => ({
  type: 'SHOW_EDIT_FORM',
  name,
  ingredients,
  directions,
});

export const hideFormActionCreator = () => ({
  type: 'HIDE_FORM',
});
