import React from "react";
import PlayerControls from "./PlayerControls";
import PlayerDetail from "./PlayerDetail";
import "./Player.css"
import ReactPlayer from "react-player/"

const Player = () => {

    
  return (
    <div className="contenedor">
      <div id="peron" className="card">
        <h3 className="seriesName">Cowboy Bebop (1998)</h3>
        <img
          src="https://i.ytimg.com/vi/JKM0JmaD0oY/maxresdefault.jpg"
          alt=""
          className="serieImg"
        />
        <PlayerDetail />
        <PlayerControls />   
      </div>
    
    <audio controls>
        <source src="https://storage.googleapis.com/dogs-web-app/Timbaland%20-%20Apologize%20ft.%20OneRepublic.mp3" type="audio/ogg"/>
    </audio>
    
     <ReactPlayer controls url="https://storage.googleapis.com/dogs-web-app/Timbaland%20-%20Apologize%20ft.%20OneRepublic.mp3"/>
      
      </div>
  );
};
export default Player;
