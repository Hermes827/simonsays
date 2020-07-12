const initialState = {
  playerTurn: false,
  computerTurn: true,
  computerPicks: ["div1","div2","div1","div3"],
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

function pickDiv(){
  let randomDiv = `.div${(Math.floor(Math.random()*4) + 1)}`
  glow(randomDiv)
  playAudio(randomDiv)
}

/////////////////////////////////////////////////////////////////////////

export function reducer(state = initialState, action) {
  // console.log('reducer', state, action);
  switch(action.type){

    case 'COMPUTER_ACTS':
    let randomDiv = `.div${(Math.floor(Math.random()*4) + 1)}`
    if(state.computerPicks.length === 0){
      pickDiv(randomDiv)
    } else if(state.computerPicks.length != 0){
      console.log("hello")
      // state.computerPicks.forEach(myFunction);
      state.computerPicks.forEach(myFunction)
      function myFunction(item){
        let divElement = "." + item
          combinedFunction(divElement)
        }

    }

    // recursionFunc(i){
    //   const computerActs = this.props.computerActs
    //   const helperFunction = function(arg){
    //     return arg()
    //   }
    //   setTimeout(function(){
    //       helperFunction(computerActs);
    //   }, 2000 * i);
    // }
    //
    // computerTurn = () => {
    //   for (let i=0; i<this.props.computerPicks.length; i++) {
    //    this.recursionFunc(i);
    // }
    // }


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

    default:
      return state
  }
}
