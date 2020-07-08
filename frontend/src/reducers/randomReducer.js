const initialState = {
  clicked: false
}

export function reducer(state = initialState, action) {
  console.log('reducer', state, action);
  switch(action.type) {
    case 'INCREMENT':
    return Object.assign({}, state, {
        clicked: !state.clicked
    });
    default:
      return state
  }
}
