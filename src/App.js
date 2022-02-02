import './App.css';
import React from "react";
import Background from "./video/backgroundd.mp4";

function App() {
  return (
    <div className="App">
      <video autoPlay loop>
        
        <source src={Background} type="video/mp4"/>
      </video>
       <div className="container">
         <input type="text" placeholder="search" >
          <a href>
            <li className="fas fa-search"></li>
          </a>
         </input>

       </div>
    </div>
  );
}

export default App;
