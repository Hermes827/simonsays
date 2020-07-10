export const INCREMENT = "INCREMENT";
export const ASSIGN_DIV = "ASSIGN_DIV";
const CLICK = "CLICK";
const COMPUTER_TURN = "COMPUTER_TURN"
const COMPUTER_MAKE_MOVE = "COMPUTER_MAKE_MOVE"
const PLAYER_TURN = "PLAYER_TURN"
const SUCCESS = "SUCCESS"

export function assignDiv() {
  return { type: ASSIGN_DIV };
}

export function click() {
  return { type: CLICK };
}

export function computerTurn(){
  return { type: COMPUTER_TURN }
}

export function computerMakeMove(){
  return { type: COMPUTER_MAKE_MOVE }
}

export function playerTurn(arg){
  const audioEl = arg.target.querySelector('audio')
  audioEl.play()
  return { type: PLAYER_TURN, payload: [arg]}
}

export function success(){
  return { type: SUCCESS }
}
