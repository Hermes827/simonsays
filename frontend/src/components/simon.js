import React from 'react';
import CenterConsole from './centerConsole.js'

class Simon extends React.Component{

  render(){
  return (
    <div className="simonUnit">
      <div className="divsContainer">
      <div className="topHalf">
      <div className={`div1`}></div>
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
    </div>
  );
}
}

export default Simon;

 // ${this.state.currentComputer === true ? "computerBannerActive" : ""}
