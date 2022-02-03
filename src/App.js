import './App.css';
import React from "react";
import Background from "./video/background.mp4";

function App() {
  return (
    <div className="App">
      <video autoPlay loop muted >
        
        <source src={Background} />
      </video>
       <div className="container">
        <input type="text" placeholder="Search..." />
          <div className="search-btn">
            <li className="fas fa-search"></li>
          </div>
        
       </div>
       
    </div>
  );
}

export default App;
