const initialState = {
  clicked: false,
  div: ""
}

export function reducer(state = initialState, action) {
  console.log('reducer', state, action);
  switch(action.type) {
    case 'INCREMENT':
    let randomNum = Math.floor(Math.random()*4) + 1
    let randomDiv = `div${randomNum}`
    return Object.assign({}, state, {
      div: randomDiv
    });
    default:
      return state
  }
}



// return Object.assign({}, state, {
//     clicked: !state.clicked
// });
