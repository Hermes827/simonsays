<>
<div className="title">Simon</div>
<Button variant="outline-dark" onClick={this.login}>Log In</Button>
<Button variant="outline-dark" onClick={this.signup}>Sign Up</Button>
</>

//computerTurn = () => {
//   let i = 0
//   while (i < 3) {
//     setInterval(function(){console.log("hi")},3000)
//     // this.props.computerActs()
//     i++;
//   }
// }

//   task(i){
//   setTimeout(this.props.computerActs(), 2000 * i);
// }

// case 'YO':
// hello()
// return
//
// case 'WASSUP':
// whatsup()
// return


// console.log(state.playerPicks)
 // if(state.playerPicks[0] === state.computerPicks[0]){
 //   console.log("cool")
 // }
//  return Object.assign({}, state, {
//   playerPicks: [],
//   playerTurn: false
// });

// playerActs(){
//   if(this.state.playerTurn != true){return}
//   let number = prompt("Please enter the right number");
//   let intNumber = parseInt(number)
//   if(number === this.state.number.join()){
//     this.setState({
//       playerTurn: false,
//       score: this.state.score + 10
//     })
//     setTimeout(() => this.computerActs(), 1000)
//   } else if(number === null){
//     alert("do you want to quit?")
//   } else {
//     console.log("game over")
//     this.setState({
//       number: [],
//       score: 0
//     })
//   }
// }

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

// function pickDiv(arg){
//   glow(arg)
//   playAudio(arg)
// }

/////////////////////////////////////////////////////////

// recursionFunc(i){
//   const computerActs = this.props.computerActs
//   const helperFunction = function(arg){
//      return arg()
//    }
//   setTimeout(function(){
//       helperFunction(computerActs);
//   }, 2000 * i);
// }
//
// computerTurn = () => {
//   for (let i=0; i<3; i++) {
//    this.recursionFunc(i);
// }
// }

function hello(){
  console.log("hi")
}

function whatsup(){
  console.log("whats up")
}

function comparePicks(state){
  // console.log(state.computerPicks.join())
  // console.log(state.playerPicks.join())
  // console.log(state.computerPicks.join() === state.playerPicks.join())
  // console.log(state.computerPicks === state.playerPicks)
}

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

//   constructor(){
//   super()
//
//   // this.state = {
//   //   playerTurn: false,
//   //   number: [],
//   //   score: 0
//   // }
//
// }

// computerMove = () => {
//   // this.props.computerTurn()
//   this.props.assignDiv()
//   this.props.playerTurn()
// }

// win(){
//   if(this.props.computerLastSequence[0] === this.props.playerLastSequence[0]){
//     this.props.success()
//     // this.computerMove()
//   }
// }

// beginGame = () => {
//   this.computerActs()
// }

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

// playerActs(){
//   if(this.state.playerTurn != true){return}
//   let number = prompt("Please enter the right number");
//   let intNumber = parseInt(number)
//   if(number === this.state.number.join()){
//     this.setState({
//       playerTurn: false,
//       score: this.state.score + 10
//     })
//     setTimeout(() => this.computerActs(), 1000)
//   } else if(number === null){
//     alert("do you want to quit?")
//   } else {
//     console.log("game over")
//     this.setState({
//       number: [],
//       score: 0
//     })
//   }
// }

// setComputerTurn(){
//   this.setState({
//     computerTurn: true,
//     playerTurn: false
//   })
// }
//
// setPlayerTurn(){
//   this.setState({
//     computerTurn: false,
//     playerTurn: true
//   })
// }

// playerActionTurn = () => {
//   // if(this.state.computerTurn === true){return}
//   this.playerActs()
// }
//
// showState = () => {
//   console.log(this.state)
// }
//
// setPlayerTurn(){}

// scorePoints = () => {
//   console.log(this.props)
//   if(this.props.playerPicks[0] === this.props.computerPicks[0]){
//     console.log("cool")
//   }
// }
