const COMPUTERACTS = 'COMPUTER_ACTS'
const PLAYERACTS = 'PLAYER_ACTS'
const SCOREPOINT = 'SCORE_POINT'

export function computerActs(){
  return { type: COMPUTERACTS }
}

export function playerActs(e){
  return { type: PLAYERACTS, payload: e }
}

export function scorePoint(arg, arg1){
  return { type: SCOREPOINT, payload: arg, payload1: arg1 }
}
