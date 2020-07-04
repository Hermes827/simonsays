export const initialState = {
  username: "",
  password: "",
  email: ""
}

function createUser(arg){
  console.log('hi')
let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
let body = JSON.stringify({
  "user":{
    "username": arg.payload.username,
    "password": arg.payload.password,
    "email": arg.payload.email,
    "score":"1"
    }
      });

let requestOptions = {
   method: 'POST',
   headers: myHeaders,
   body: body,
   redirect: 'follow'
};

fetch("http://localhost:8000/users", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

function random(){
  console.log("hello")
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
    default:
      return state
  }
}
