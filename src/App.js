import ElonMusk from './imageInSrc.jpg';
import "./style.css"
import './App.css';
import React from 'react';

// border:solid 1px black;max-width:100vw"
function App() {
  return (
    <React.Fragment>
      <div className = "app">
        <div className ="profile">

          <h1 className ="title red">Ahmed Ramy</h1>

          <br />

          <img src= {ElonMusk} alt = "Elon Musk" />

          <br />

          <img src="/imageInPublic.jpg" alt = "Jeff Bezos" /> 

        </div>

        <video width="320" height="240" controls>

          <source src="myVideo.mp4" type="video/mp4" />

        </video>
      </div>
    </React.Fragment>
  );
}

export default App;
