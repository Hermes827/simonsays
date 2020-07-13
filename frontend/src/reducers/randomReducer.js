const initialState = {
  playerTurn: false,
  computerTurn: true,
  computerPicks: [],
  playerPicks: [],
  score: 0
}

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

function combinedFunction(arg){
  glow(arg)
  playAudio(arg)
}

function existingDiv(state, i){
let newArg = "."+state.computerPicks[i]
combinedFunction(newArg)
}

function computerTurn(state){
  for (let i=0; i<state.computerPicks.length; i++) {
    const mainFunc = () => existingDiv(state, i)
    const helperFunction = function(arg){
      return arg()
    }
   setTimeout(function(){
       helperFunction(mainFunc);
   }, 2000 * i);
}
}

/////////////////////////////////////////////////////////////////////////

export function reducer(state = initialState, action) {
  // console.log('reducer', state, action);
  switch(action.type){

    case 'COMPUTER_ACTS':
    if(state.computerTurn === false){return}
    console.log("hello")
    console.log(state.computerTurn)
    let randomDiv = `.div${(Math.floor(Math.random()*4) + 1)}`
    if(state.computerPicks.length === 0){
      combinedFunction(randomDiv)
    } else if(state.computerPicks.length !== 0){
      computerTurn(state)
    }
    return Object.assign({}, state, {
     computerPicks: [...state.computerPicks, randomDiv.slice(1,5)],
     playerTurn: true,
     computerTurn: false
   });

   case 'PLAYER_ACTS':
    if(state.playerTurn != true){return}
    const divClassName = "." + action.payload.target.classList[0]
    glow(divClassName)
    playAudio(divClassName)
    return Object.assign({}, state, {
     playerPicks: [...state.playerPicks, divClassName.slice(1,5)],
     playerTurn: false,
     computerTurn: true
   })

   case 'SCORE_POINT':
   console.log(state)
   return

    default:
      return state
  }
}
