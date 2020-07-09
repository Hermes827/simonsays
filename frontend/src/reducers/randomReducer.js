const initialState = {
  clicked: false,
  div: ""
}

function removeGlow(arg){
  arg.classList.remove("glow")
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
    setTimeout(()=> removeGlow(divElement[0]), 850)
    break;

    case 'CLICK':
    console.log("clicked")
    return Object.assign({}, state, {
        clicked: true
    });
    default:
      return state
  }
}



// return Object.assign({}, state, {
//     clicked: !state.clicked
// });
