import React from 'react';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import {IconButton} from '@material-ui/core';
import "./Player.css";
const PlayerControls = ()=> {
  const handler= (e)=>{
    console.log ("si, che tiene onclick")

  }
    return(
      <div>
        <input type="range" className="pgb"></input>

      
        <div className="controls">
            <IconButton aria-label="previous" onClick={handler}>
            <SkipPreviousIcon />
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon />
          </IconButton>
          <IconButton aria-label="next">
            <SkipNextIcon />
          </IconButton>
            
        </div>
        </div>
    )
} 
export default PlayerControls