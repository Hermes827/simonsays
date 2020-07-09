import React from 'react';
import CenterConsole from './centerConsole.js'
import { connect } from 'react-redux';
import { assignDiv } from '../action/index.js';
import { click } from '../action/index.js';


class Simon extends React.Component{

  constructor(){
    super()
  }

  random(){
  }

  playAudio = (e) => {
    e.target.classList.add('glow')
    this.props.click()
    const audioEl = e.target.querySelector('audio')
    audioEl.play()
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
   assignDiv,
   click
 };

 const mapStateToProps = (state) => ({
   clicked: state.clicked,
   div: state.div
 })

 export default connect(mapStateToProps, mapDispatchToProps)(Simon);
