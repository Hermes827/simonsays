import React from 'react';
import CenterConsole from './centerConsole.js'
import { connect } from 'react-redux';
import { increment } from '../action/index.js';

class Simon extends React.Component{

  random(){
    if(this.props.clicked === true){
      console.log("hello")
      console.log(this.props.div)
    }
  }

  render(){
  return (
    <div className="simonUnit">
      <div className="divsContainer">
      <div className="topHalf">
      <div className={`div1 ${this.props.div === "div1" ? "glow" : ""}`}></div>
      <div className={`div2 ${this.props.div === "div2" ? "glow" : ""}`}></div>
      </div>

      <div className="lowerHalf">
      <div className={`div3 ${this.props.div === "div3" ? "glow" : ""}`}></div>
      <div className={`div4 ${this.props.div === "div4" ? "glow" : ""}`}></div>
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

//why is the ternary not working with the div1, div2 etc?

 // ${this.state.currentComputer === true ? "computerBannerActive" : ""}

 const mapDispatchToProps = {
   increment
 };

 const mapStateToProps = (state) => ({
   clicked: state.clicked
 })

 export default connect(mapStateToProps, mapDispatchToProps)(Simon);
