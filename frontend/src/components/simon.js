import React from 'react';
import CenterConsole from './centerConsole.js'
import { connect } from 'react-redux';
import { playerTurn } from '../action/index.js';
import { computerTurn } from '../action/index.js';

class Simon extends React.Component{

  playAudio = (e) => {
    console.log(this.props)
    if(this.props.playerTurn !== true){return}
    e.persist()
    e.target.classList.add('glow')
    const audioEl = e.target.querySelector('audio')
    audioEl.play()
    setTimeout(()=> e.target.classList.remove('glow'), 850)
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
  playerTurn
};

const mapStateToProps = (state) => ({
  computerTurn: state.computerTurn,
  playerTurn: state.playerTurn
})

export default connect(mapStateToProps, mapDispatchToProps)(Simon);
