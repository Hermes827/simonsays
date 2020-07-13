// export const INCREMENT = "INCREMENT";
// export const ASSIGN_DIV = "ASSIGN_DIV";
// const CLICK = "CLICK";
// const COMPUTER_TURN = "COMPUTER_TURN"
// const COMPUTER_MAKE_MOVE = "COMPUTER_MAKE_MOVE"
// const PLAYER_TURN = "PLAYER_TURN"
// const SUCCESS = "SUCCESS"
const COMPUTERACTS = 'COMPUTER_ACTS'
const PLAYERACTS = 'PLAYER_ACTS'
const SCOREPOINT = 'SCORE_POINT'
const YO = 'YO'
const WASSUP = 'WASSUP'

export function computerActs(){
  return { type: COMPUTERACTS }
}

export function playerActs(e){
  return { type: PLAYERACTS, payload: e }
}

export function scorePoint(arg, arg1){
  return { type: SCOREPOINT, payload: arg, payload1: arg1 }
}

export function yo(){
  return { type: YO }
}

export function wassup(){
  return { type: WASSUP }
}
