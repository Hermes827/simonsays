import React from 'react';
import './App.css';
import Simon from './components/simon.js'
import Test from './components/test.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateTodos from './components/todos/createTodos.js';

class App extends React.Component{

  render(){
  return (
    <div className="App">
      <Simon/>
      <CreateTodos/>
    </div>
  );
}
}

export default App;
