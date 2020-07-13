import React from 'react';
import CenterConsole from './centerConsole.js'
import { connect } from 'react-redux';
import { playerActs } from '../action/index.js';
import { computerActs } from '../action/index.js';

class Simon extends React.Component{

  playerTurn = (e) => {
    this.props.playerActs(e)
    // setTimeout(()=> this.computerTurn(), 2000)
    setTimeout(()=> this.props.computerActs(), 2000)
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

  // computerTurn(){
  //   console.log("whats up")
  //   this.props.computerActs()
  //   // for (let i=0; i<this.props.computerPicks.length; i++) {
  //   //  this.recursionFunc(i);
  //
  // }

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
  playerActs, computerActs
};

const mapStateToProps = (state) => ({
  playerTurn: state.playerTurn,
  number: state.number,
  score: state.score,
  computerPicks: state.computerPicks
})

export default connect(mapStateToProps, mapDispatchToProps)(Simon);
