import React from 'react';
import CenterConsole from './centerConsole.js'
import { connect } from 'react-redux';
import { assignDiv } from '../action/index.js';
import { click } from '../action/index.js';


class Simon extends React.Component{

  constructor(){
    super()
    this.div1 = React.createRef();
    this.div2 = React.createRef();
    this.div3 = React.createRef();
    this.div4 = React.createRef();
  }

  random(){
  }

  playAudio = (e) => {
    // console.log(this.div.current.className === this.div.current.className)
    this.props.click()
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
}

  render(){
  return (
    <div className="simonUnit">
      <div className="divsContainer">
      <div className="topHalf">
      <div className={`div1 ${this.props.div === "div1" ||
      (this.div1.current !== null && this.div1.current.className && this.props.clicked === true) ? "glow" : ""}`}
      onClick={this.playAudio}
      ref={this.div1}
        >
        <audio className="audio-element">
          <source src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"></source>
        </audio>
      </div>
      <div className={`div2 ${this.props.div === "div2" ||
      (this.div2.current !== null && this.div2.current.className && this.props.clicked === true) ? "glow" : ""}`}
        onClick={this.playAudio}
        ref={this.div2}
        >
        <audio className="audio-element">
          <source src="https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"></source>
        </audio>
      </div>
      </div>

      <div className="lowerHalf">
      <div className={`div3 ${this.props.div === "div3" ? "glow" : ""}`} onClick={this.playAudio}>
        <audio className="audio-element">
          <source src="https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"></source>
        </audio>
      </div>
      <div className={`div4 ${this.props.div === "div4" ? "glow" : ""}`} onClick={this.playAudio}>
        <audio className="audio-element">
          <source src="https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"></source>
        </audio>
      </div>
      </div>
      </div>
      <div className="center">
        <CenterConsole/>
      </div>
      {this.random()}
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

  // || this.props.clicked === true
