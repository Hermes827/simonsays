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

////////////////////////////////////////////////////////////////////

// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify({"name":"chris","email":"hahadfasfa@gmail.com","password":"odafsdfk"});
//
// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };
//
// fetch("localhost:3000/api/users/", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

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
