const defaultState ={
  inputValue: '',
  list: []
};

export default (state=defaultState, action) => {
  const newState = {...state};
  switch (action.type) {
    case 'change_input_value':
      newState.inputValue = action.value;
      return newState;
    case 'add_list_item':
      newState.list.push(action.value);
      newState.inputValue = '';
      return newState;
      case 'delete_item':
        newState.list.splice(action.index, 1);
    default:
  }
  console.log(state, action);
  return state;
}