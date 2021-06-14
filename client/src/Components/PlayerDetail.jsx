import React from "react"
import "./Player.css"
import { LinearProgress } from "@material-ui/core"


const PlayerDetail= ()=>{
    return <div className ="seriesDetail">
        <h4> Tank! - The Seatbells </h4>
        <LinearProgress variant="buffer" value= "100" valueBuffer= "100" />
    </div>
}
export default PlayerDetail