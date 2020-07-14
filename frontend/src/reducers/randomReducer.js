const initialState = {
  playerTurn: false,
  computerTurn: true,
  // computerPicks: ["div1","div2"],
  computerPicks: [],
  playerPicks: [],
  score: 0,
  computerTurnNow: false
}

function removeGlow(arg){
  arg.classList.remove("glow")
}

function playAudio(arg){
  const divElement = document.querySelector(arg)
  // if(divElement === null){return}
  let audioEl = divElement.querySelector('audio')
  audioEl.play()
}

function glow(arg){
  const divElement = document.querySelector(arg)
  // if(divElement === null){return}
  divElement.classList.add("glow")
  setTimeout(() => removeGlow(divElement), 850)
}

function combinedFunction(arg){
  glow(arg)
  playAudio(arg)
}

function existingDiv(state, i, arg1){
if(i+1 === state.computerPicks.length){
  setTimeout(()=> combinedFunction(arg1), 1000)
}
let newArg = ".div"+state.computerPicks[i]
combinedFunction(newArg)
}

function computerTurn(state, arg1){
  for (let i=0; i<state.computerPicks.length; i++) {
    const mainFunc = () => existingDiv(state, i, arg1)
    const helperFunction = function(arg){
      return arg()
    }
   setTimeout(function(){
       helperFunction(mainFunc);
   }, 1000 * i);
}
}

/////////////////////////////////////////////////////////////////////////

export function reducer(state = initialState, action) {
  // console.log('reducer', state, action);
  switch(action.type){

    case 'COMPUTER_ACTS':
    let randomDiv = `.div${(Math.floor(Math.random()*4) + 1)}`
    if(state.computerPicks.length === 0){
      combinedFunction(randomDiv)
    } else if(state.computerPicks.length !== 0){
      computerTurn(state, randomDiv)
    }
    return Object.assign({}, state, {
     computerPicks: [...state.computerPicks, randomDiv.slice(4,5)],
     playerTurn: state.playerTurn = true,
     computerTurn: state.computerTurn = false
   });

   case 'PLAYER_ACTS':
   // console.log(state)
    const divClassName = "." + action.payload.target.classList[0]
    combinedFunction(divClassName)
    return Object.assign({}, state, {
     // playerPicks: [...state.playerPicks, divClassName.slice(4,5)],
     // playerTurn: state.playerTurn = false,
     computerTurn: state.computerTurn = true
    })
    break;

   case 'SCORE_POINT':
   if(action.payload === action.payload1){
     console.log("cool")
     return Object.assign({}, state, {
      score: state.score + 100,
      computerTurnNow: state.computerTurnNow = true,
      playerTurn: state.playerTurn = false,
      computerTurn: state.computerTurn = true
     })
   } else {
     alert("wrong, please play again")
     return Object.assign({}, state, {
      score: state.score = 0,
      computerPicks: [],
      computerTurnNow: state.computerTurnNow = false,
      computerTurn: state.computerTurn = true,
      playerTurn: state.playerTurn = false
     })
   }

    default:
      return state
  }
}
