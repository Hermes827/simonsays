import React from 'react';
import CenterConsole from './centerConsole.js'

class Simon extends React.Component{

  render(){
  return (
    <div className="simonUnit">
      <div className="topHalf">
      <div className="div1">1</div>
      <div className="div2">2</div>
      </div>
      <div className="center">
        <CenterConsole/>
      </div>
      <div className="lowerHalf">
      <div className="div3">3</div>
      <div className="div4">4</div>
      </div>
    </div>
  );
}
}

export default Simon;
