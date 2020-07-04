import React from 'react';
import './App.css';
import Simon from './components/simon.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateTodos from './components/todos/createTodos.js';

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
