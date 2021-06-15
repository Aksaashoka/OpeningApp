import React from 'react';
import ReactPlayer from "react-player/"
import "./Player.css";
const PlayerControls = ()=> {
  
    return(
    <ReactPlayer className='audioPlayer'controls url="https://storage.cloud.google.com/opening-app/Cowboy%20Bebop%20OST%201%20-%20Tank!.mp3"/>
    )
} 
export default PlayerControls