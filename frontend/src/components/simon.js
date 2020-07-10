import React from 'react';
import CenterConsole from './centerConsole.js'
import { connect } from 'react-redux';
// import { playerTurn } from '../action/index.js';
// import { computerTurn } from '../action/index.js';

class Simon extends React.Component{

//   playAudio = (e) => {
//     if(this.props.isPlayerTurn !== true){return}
//     e.persist()
//     e.target.classList.add('glow')
//     const audioEl = e.target.querySelector('audio')
//     audioEl.play()
//     setTimeout(()=> e.target.classList.remove('glow'), 850)
//     // console.log(e.target.classList[0])
//     this.props.playerTurn(e.target.classList[0])
// }

  playAudio = (e) => {
    if(this.props.playerTurn !== true){return}
    const audioEl = e.target.querySelector('audio')
    audioEl.play()
    // this.props.playerTurn(e)
  }


  render(){
  return (
    <div className="simonUnit">
      <div className="divsContainer">
      <div className="topHalf">
      <div className="div1" onClick={this.playAudio}>
        <audio className="audio-element">
          <source src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"></source>
        </audio>
      </div>
      <div className="div2" onClick={this.playAudio}>
        <audio className="audio-element">
          <source src="https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"></source>
        </audio>
      </div>
      </div>
      <div className="lowerHalf">
      <div className="div3" onClick={this.playAudio}>
        <audio className="audio-element">
          <source src="https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"></source>
        </audio>
      </div>
      <div className="div4" onClick={this.playAudio}>
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
  // playerTurn
};

const mapStateToProps = (state) => ({
  // isComputerTurn: state.isComputerTurn,
  // isPlayerTurn: state.isPlayerTurn
  playerTurn: state.playerTurn,
  number: state.number,
  score: state.score
})

export default connect(mapStateToProps, mapDispatchToProps)(Simon);
