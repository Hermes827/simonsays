import React from 'react';
import CenterConsole from './centerConsole.js'
import { connect } from 'react-redux';
import { increment } from '../action/index.js';

class Simon extends React.Component{

  random(){
    if(this.props.clicked === true){
      console.log("hello")
    }
  }

  render(){
  return (
    <div className="simonUnit">
      <div className="divsContainer">
      <div className="topHalf">
      <div className={`div1 ${this.props.clicked === true ? "glow" : ""}`}></div>
      <div className="div2"></div>
      </div>
      <div className="center">
        <CenterConsole/>
      </div>
      <div className="lowerHalf">
      <div className="div3"></div>
      <div className="div4"></div>
      </div>
      </div>
      {this.random()}
    </div>
  );
}
}

 // ${this.state.currentComputer === true ? "computerBannerActive" : ""}

 const mapDispatchToProps = {
   increment
 };

 const mapStateToProps = (state) => ({
   clicked: state.clicked
 })

 export default connect(mapStateToProps, mapDispatchToProps)(Simon);
