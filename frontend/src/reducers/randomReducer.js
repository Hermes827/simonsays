// const initialState = {
//   clicked: false,
//   div: "",
//   isComputerTurn: false,
//   isPlayerTurn: false,
//   computerLastSequence: [],
//   playerLastSequence: [],
//   currentPlayer: {},
//   hasSucceeded: false
// }
//
function removeGlow(arg){
  arg.classList.remove("glow")
}

function playAudio(arg){
  const divElement = document.querySelector(arg)
  let audioEl = divElement.querySelector('audio')
  audioEl.play()
}

function glow(arg){
  const divElement = document.querySelector(arg)
  divElement.classList.add("glow")
  setTimeout(() => removeGlow(divElement), 850)
}

const initialState = {
  playerTurn: false,
  computerTurn: true,
  computerPicks: [],
  playerPicks: [],
  score: 0
}

function hello(){
  console.log("hi")
}

function whatsup(){
  console.log("whats up")
}

function combinedFunction(arg){
  glow(arg)
  playAudio(arg)
}

function comparePicks(state){
  console.log(state.computerPicks.join())
  console.log(state.playerPicks.join())
  console.log(state.computerPicks.join() === state.playerPicks.join())
  console.log(state.computerPicks === state.playerPicks)
}

/////////////////////////////////////////////////////////

export function reducer(state = initialState, action) {
  // console.log('reducer', state, action);
  switch(action.type){

    case 'COMPUTER_ACTS':
    let randomDiv = `.div${(Math.floor(Math.random()*4) + 1)}`
    glow(randomDiv)
    playAudio(randomDiv)
    console.log(state)
    comparePicks(state)
    return Object.assign({}, state, {
     computerPicks: [...state.computerPicks, randomDiv.slice(1,5)],
     playerTurn: true
   });

   case 'PLAYER_ACTS':
    if(state.playerTurn != true){return}
    const divClassName = "." + action.payload.target.classList[0]
    glow(divClassName)
    playAudio(divClassName)
    return Object.assign({}, state, {
     playerPicks: [...state.playerPicks, divClassName.slice(1,5)],
     playerTurn: false
   })

   case 'SCORE_POINT':
   console.log(state)
   return

   case 'YO':
   hello()
   return

   case 'WASSUP':
   whatsup()
   return

    default:
      return state
  }
}

// console.log(state.playerPicks)
 // if(state.playerPicks[0] === state.computerPicks[0]){
 //   console.log("cool")
 // }
//  return Object.assign({}, state, {
//   playerPicks: [],
//   playerTurn: false
// });

// playerActs(){
//   if(this.state.playerTurn != true){return}
//   let number = prompt("Please enter the right number");
//   let intNumber = parseInt(number)
//   if(number === this.state.number.join()){
//     this.setState({
//       playerTurn: false,
//       score: this.state.score + 10
//     })
//     setTimeout(() => this.computerActs(), 1000)
//   } else if(number === null){
//     alert("do you want to quit?")
//   } else {
//     console.log("game over")
//     this.setState({
//       number: [],
//       score: 0
//     })
//   }
// }

// computerActs(){
//   let randomNum = Math.floor(Math.random()*4) + 1
//   this.setState(
//     {
//     number: [...this.state.number, randomNum],
//     playerTurn: true
//   },
//     function(){console.log(this.state.number.join())},
//     setTimeout(() => this.playerActs(), 2000)
//   )
// }


// return Object.assign({}, state, {
//     clicked: !state.clicked
// });

// case 'ASSIGN_DIV':
// let randomNum = Math.floor(Math.random()*4) + 1
// let randomDiv = `div${randomNum}`
// const divElement = document.getElementsByClassName(randomDiv)
// console.log(divElement)
// divElement[0].classList.add("glow")
// const audioEl = divElement[0].querySelector('audio')
// audioEl.play()
// setTimeout(() => removeGlow(divElement[0], state), 850)
// const divName = divElement[0].classList[0]
// // return {
// //   ...state,
// //     computerLastSequence: divName
// // }
// return Object.assign({}, state, {
//   computerLastSequence: [divName]
// });
//
// case 'PLAYER_ACTION':
//
// return
//
// case 'CLICK':
// console.log("clicked")
// return Object.assign({}, state, {
//     clicked: true
// });
//
// case 'COMPUTER_TURN':
// return Object.assign({}, state, {
//   isComputerTurn: true,
//   isPlayerTurn: false
// });
//
// case 'COMPUTER_MAKE_MOVE':
// console.log("hi")
// return
//
// case 'PLAYER_TURN':
// return Object.assign({}, state, {
//   isComputerTurn: false,
//   isPlayerTurn: true,
//   playerLastSequence: action.payload
// });
//
// case 'SUCCESS':
// return Object.assign({}, state, {
//   hasSucceeded: true,
//   isPlayerTurn: false,
//   // computerLastSequence: [],
//   // playerLastSequence: [],
// });
// return

// case 'SET_CURRENT_PLAYER':
// return Object.assign({}, state, {
//   currentPlayer:
// });
