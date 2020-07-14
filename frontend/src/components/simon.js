import React from 'react';
import CenterConsole from './centerConsole.js'
import { connect } from 'react-redux';
import { playerActs } from '../action/index.js';
import { computerActs } from '../action/index.js';
import { scorePoint} from '../action/index.js';
let random = []

class Simon extends React.Component{

  playerTurn = (e) => {
    e.persist()
    if(!this.props.playerTurn){return}
    console.log("hi")
    this.props.playerActs(e)
    let playerPicksArr = e.target.classList[0].slice(3,4)
    random.push(playerPicksArr)
    console.log(random)
    let newPlayerPicksArr = random.join()
    let computerPicksArr = this.props.computerPicks.join()
    for(let i=0;i<this.props.computerPicks.length;i++){
      if(random[i] !== this.props.computerPicks[i] && random[i] !== undefined){
        console.log("wrong")
        this.props.scorePoint(newPlayerPicksArr, computerPicksArr)
        random = []
      }
    }
    if(newPlayerPicksArr === computerPicksArr){
      this.props.scorePoint(newPlayerPicksArr, computerPicksArr)
      setTimeout(()=> this.canComputerGo(), 2000)
      random = []
    }
  }

  canComputerGo(){
    if(this.props.computerTurnNow === true){
      this.props.computerActs()
    }
  }

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
  playerPicks: state.playerPicks,
  computerTurnNow: state.computerTurnNow
})

export default connect(mapStateToProps, mapDispatchToProps)(Simon);
