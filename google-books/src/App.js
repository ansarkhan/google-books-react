import React from 'react';
import Books from './components/Books';
import Jumbotron from './components/Jumbotron';

function App() {
  return (
    <div className="App">
      <Books>
        <Jumbotron />
      </Books>
    </div>
  );
}

export default App;
