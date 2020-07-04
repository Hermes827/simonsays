// export default function manageSignupData(state = {username: [],}, action){
//   switch (action.type){
//     case 'ADD_USERNAME':
//
//       console.log({ username: state.username.concat(action.payload.text) });
//
//       return { username: state.username.concat(action.payload.text) };
//
//     default:
//       return state;
//   }
// }



export const initialState = {
  username: "",
  password: "",
  email: ""
}

export default function manageSignupData(state = initialState, action){
  switch (action.type) {
    case 'ADD_SIGNUP_DATA':

    console.log(action.payload)
    console.log({ username: state.username});
    //
    //       return { username: state.username.concat(action.payload.text) };

    return {
      username: action.payload.username
    }

    default:
      return state
  }
}
