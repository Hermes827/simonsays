export const initialState = {
  username: "",
  password: "",
  email: ""
}

export default function manageSignupData(state = initialState, action){
  switch (action.type) {
    case 'ADD_SIGNUP_DATA':
    return {
      username: action.payload.username
    }
    default:
      return state
  }
}
