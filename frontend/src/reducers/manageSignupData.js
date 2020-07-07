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
    "name": arg.payload.username,
    "password": arg.payload.password,
    "email": arg.payload.email
    });

let requestOptions = {
   method: 'POST',
   headers: myHeaders,
   body: body,
   redirect: 'follow'
};

fetch("http://localhost:3000/api/users", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

function random(){
  console.log("hello")
}

function loginUser(arg){
  console.log('hi')
let myHeaders = new Headers();
// myHeaders.append("x-access-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjA0NmE5ODQzYWNmMzA0ZGQyYTM5ZWUiLCJpYXQiOjE1OTQxMjQ5NTJ9.on70365mSl2LlbAlLaMT_VTYicdKCiBdIctZKD-PymY");
myHeaders.append("Content-Type", "application/json");
let body = ""

let requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://localhost:3000/api/users/current", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

export default function manageSignupData(state = initialState, action, saveData){
  switch (action.type) {
    case 'ADD_SIGNUP_DATA':


    createUser(action)

    case 'ADD_LOGIN_DATA':


    loginUser(action)

    return {
      username: action.payload.username,
      password: action.payload.password,
      email: action.payload.email
    }
    default:
      return state
  }
}
