import React, { useState } from 'react'
import './App.css';
import Counter from './Components/Counter'

function App() {

  const [ showCount, setShowCount ] = useState( false )
  return (
    <div className="App">
        <button
          onClick={() => {
            setShowCount(!showCount)}}
        >
          {
            showCount ? "Home" : "count"
          }
        </button>
        {
          showCount ? 
            <Counter /> :
            "Home"
        }
        
    </div>
  );
}

export default App;
