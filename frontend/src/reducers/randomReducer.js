const initialState = {
  clicked: false,
  div: "",
  isComputerTurn: false,
  isPlayerTurn: false,
  computerLastSequence: [],
  playerLastSequence: [],
  currentPlayer: {},
  hasSucceeded: false
}

function removeGlow(arg, state){
  arg.classList.remove("glow")
  return Object.assign({}, state, {
    isComputerTurn: false,
    isPlayerTurn: true
  })
}

export function reducer(state = initialState, action) {
  // console.log('reducer', state, action);
  switch(action.type) {

    case 'ASSIGN_DIV':
    let randomNum = Math.floor(Math.random()*4) + 1
    let randomDiv = `div${randomNum}`
    const divElement = document.getElementsByClassName(randomDiv)
    console.log(divElement)
    divElement[0].classList.add("glow")
    const audioEl = divElement[0].querySelector('audio')
    audioEl.play()
    setTimeout(() => removeGlow(divElement[0], state), 850)
    const divName = divElement[0].classList[0]
    // return {
    //   ...state,
    //     computerLastSequence: divName
    // }
    return Object.assign({}, state, {
      computerLastSequence: [divName]
    });

    case 'PLAYER_ACTION':

    return

    case 'CLICK':
    console.log("clicked")
    return Object.assign({}, state, {
        clicked: true
    });

    case 'COMPUTER_TURN':
    return Object.assign({}, state, {
      isComputerTurn: true,
      isPlayerTurn: false
    });

    case 'COMPUTER_MAKE_MOVE':
    console.log("hi")
    return

    case 'PLAYER_TURN':
    return Object.assign({}, state, {
      isComputerTurn: false,
      isPlayerTurn: true,
      playerLastSequence: action.payload
    });

    case 'SUCCESS':
    return Object.assign({}, state, {
      hasSucceeded: true,
      isPlayerTurn: false,
      // computerLastSequence: [],
      // playerLastSequence: [],
    });
    return

    // case 'SET_CURRENT_PLAYER':
    // return Object.assign({}, state, {
    //   currentPlayer:
    // });

    default:
      return state
  }
}



// return Object.assign({}, state, {
//     clicked: !state.clicked
// });
