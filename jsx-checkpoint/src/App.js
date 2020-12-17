import React from 'react';
import './App.css';

import ImageInSource from './imageInSource.jpg';
import './style.css'

function App() {
  return (
    <div className="App" >
      <div style={{border:"solid 1px black", maxWidth:"100vw"}}>
        <h1 className="title red">Faten</h1>
        <br />
        <img src={ImageInSource} alt="ImageInSource" />
        <br />
        <img src="\imageInPublic.jpg" alt="ImageInPublic" />
      </div>
      <video width="320" height="240" controls src="\video.mp4" type="video/mp4" />
    </div>
  );
}

export default App;
