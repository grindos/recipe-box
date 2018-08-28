export const showAddForm = () => ({
  type: 'SHOW_ADD_FORM',
});

export const showEditForm = ({name, ingredients, directions}) => ({
  type: 'SHOW_EDIT_FORM',
  name,
  ingredients,
  directions,
});

export const hideForm = () => ({
  type: 'HIDE_FORM',
});