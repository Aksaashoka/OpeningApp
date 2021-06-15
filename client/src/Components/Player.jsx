import React from "react";
import PlayerControls from "./PlayerControls";
import PlayerDetail from "./PlayerDetail";
import "./Player.css"


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
        <PlayerControls/>        
      </div>
      </div>
  );
};
export default Player;
