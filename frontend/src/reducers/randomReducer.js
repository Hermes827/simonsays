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
  let audioEl = arg.querySelector('audio')
  audioEl.play()
//fix the audio function with arg, arg not working
  // this.props.playerTurn(e)
}

//helper varibles

function glow(arg){
  const divElement = document.querySelector(arg)
  console.log(divElement)
  divElement.classList.add("glow")
  setTimeout(() => removeGlow(divElement), 850)
}

// const divElement = document.getElementsByClassName(randomDiv)
// console.log(divElement)
// divElement[0].classList.add("glow")

///////////////////////////

const initialState = {
  playerTurn: false,
  number: [],
  score: 0
}

export function reducer(state = initialState, action) {
  console.log('reducer', state, action);
  switch(action.type){

    case 'COMPUTER_ACTS':
    let randomDiv = `.div${(Math.floor(Math.random()*4) + 1)}`
    glow(randomDiv)
    playAudio(randomDiv)
    return Object.assign({}, state, {
     number: [],
     playerTurn: true
   });

    return

    default:
      return state
  }
}

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
