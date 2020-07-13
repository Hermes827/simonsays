import React from 'react';
import CenterConsole from './centerConsole.js'
import { connect } from 'react-redux';
import { playerActs } from '../action/index.js';
import { computerActs } from '../action/index.js';
import { scorePoint} from '../action/index.js';

class Simon extends React.Component{

  helperFunction(){

  }

  playerTurn = (e) => {
    if(!this.props.playerTurn){return}
    this.props.playerActs(e)
    let playerPicksArr = e.target.classList[0].slice(3,4)
    let newPlayerPicksArr = ""
    let computerPicksArr = this.props.computerPicks.join()
    if(this.props.playerPicks.length === 0 && this.props.computerPicks.length === 1){
      this.props.scorePoint(playerPicksArr, computerPicksArr)
  } else {
    let playerPicksArr1 = this.props.playerPicks.join()
    newPlayerPicksArr = playerPicksArr1 + "," + playerPicksArr
    this.props.scorePoint(newPlayerPicksArr, computerPicksArr)
  }
    setTimeout(()=> this.props.computerActs(), 3000)
  }

  //need to make it so that  the player can click  the buttons and match the same presses as the computer
  //currently the player can only press one button before its the compjters turn again, the player
  //needs to be able to press multiple buttons

  // if(!this.props.playerTurn){return}
  // this.props.playerActs(e)
  // let playerPicksArr = e.target.classList[0].slice(3,4)
  // let computerPicksArr = this.props.computerPicks.join()
  // console.log(playerPicksArr === computerPicksArr)
  //
  // let playerPicksArr1 = this.props.playerPicks.join()
  // let random = this.props.playerPicks
  //
  // setTimeout(()=> this.props.computerActs(), 3000)

  render(){
  return (
    <div className="simonUnit">

      <div className="divsContainer">
      <div className="topHalf">
      <div className="div1" onClick={this.playerTurn}>
        <audio className="audio-element">
          <source src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"></source>
        </audio>
      </div>
      <div className="div2" onClick={this.playerTurn}>
        <audio className="audio-element">
          <source src="https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"></source>
        </audio>
      </div>
      </div>
      <div className="lowerHalf">
      <div className="div3" onClick={this.playerTurn}>
        <audio className="audio-element">
          <source src="https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"></source>
        </audio>
      </div>
      <div className="div4" onClick={this.playerTurn}>
        <audio className="audio-element">
          <source src="https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"></source>
        </audio>
      </div>
      </div>
      </div>
      <div className="center">
        <CenterConsole/>
      </div>
    </div>
  );
}
}

const mapDispatchToProps = {
  playerActs, computerActs, scorePoint
};

const mapStateToProps = (state) => ({
  playerTurn: state.playerTurn,
  number: state.number,
  score: state.score,
  computerPicks: state.computerPicks,
  playerPicks: state.playerPicks
})

export default connect(mapStateToProps, mapDispatchToProps)(Simon);
