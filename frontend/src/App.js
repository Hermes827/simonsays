import React from 'react';
import './App.css';
import Simon from './components/simon.js'
import Test from './components/test.js'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{

  render(){
  return (
    <div className="App">
      <Simon/>

    </div>
  );
}
}

export default App;
