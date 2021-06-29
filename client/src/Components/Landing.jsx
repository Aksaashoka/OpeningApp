import React from 'react'
import {NavLink} from "react-router-dom"
import "./landing.css"
function Landing() {
    return (
        <div>
            <div className= "tvDiv">
               <h2 className="title"> ¡Comenza ahora a recordar los openings de tus series favoritas!  </h2>  
               <button className="homeBtn"><NavLink to="/player"style={{textDecoration:"none"}}> Entrar </NavLink></button>
            </div>
        </div>
    )
}

export default Landing
