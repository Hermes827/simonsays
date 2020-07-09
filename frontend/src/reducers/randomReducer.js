const initialState = {
  clicked: false,
  div: "",
  computerTurn: false,
  playerTurn: false,
  computerLastSequence: [],
  playerLastSequence: []
}

function removeGlow(arg, state){
  arg.classList.remove("glow")
  return Object.assign({}, state, {
    computerTurn: false,
    playerTurn: true
  })
}

export function reducer(state = initialState, action) {
  console.log('reducer', state, action);
  switch(action.type) {

    case 'ASSIGN_DIV':
    let randomNum = Math.floor(Math.random()*4) + 1
    let randomDiv = `div${randomNum}`
    const divElement = document.getElementsByClassName(randomDiv)
    divElement[0].classList.add("glow")
    const audioEl = divElement[0].querySelector('audio')
    audioEl.play()
    setTimeout(() => removeGlow(divElement[0], state), 850)
    const divName = divElement[0].className.slice(0,4)
    return {
      ...state,
        computerLastSequence: [...state.computerLastSequence, divName]
    }

    case 'CLICK':
    console.log("clicked")
    return Object.assign({}, state, {
        clicked: true
    });

    case 'COMPUTER_TURN':
    return
    // return Object.assign({}, state, {
    //   computerTurn: true,
    //   playerTurn: false
    // });

    case 'COMPUTER_MAKE_MOVE':
    console.log("hi")
    return

    case 'PLAYER_TURN':
    return Object.assign({}, state, {
      computerTurn: false,
      playerTurn: true
    });

    default:
      return state
  }
}



// return Object.assign({}, state, {
//     clicked: !state.clicked
// });
