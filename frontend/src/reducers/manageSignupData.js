export const initialState = {
  username: "",
  password: "",
  email: "",
  currentUser: {},
  div: "div1"
}

export default function manageSignupData(state = initialState, action, saveData){
  switch (action.type) {
    case 'ADD_SIGNUP_DATA':
    createUser(action)
    return {
      username: action.payload.username,
      password: action.payload.password,
      email: action.payload.email
    }
    break;
    // case 'ADD_LOGIN_DATA':
    // console.log("login user")
    // loginUser(action)
    // break;
    default:
      return state
  }
}
