import React from 'react';

class Signup extends React.Component{

  render(){
  return (
    <div className="App">
      <form onSubmit={null}>
        <p>
          <label>add todo</label>
            <input
              type="text"
              onChange={null}
              value={null}
            />
        </p>
        <input type="submit" />
      </form>
    </div>
  );
}
}

export default Signup;
