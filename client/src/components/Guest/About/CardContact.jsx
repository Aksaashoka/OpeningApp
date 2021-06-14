import React from "react"


const CardContact = (info)=> {
    return (
        info.map(profile=> <div className="column">
        <div className="card">
            <img src={profile.image} className="imagen" />
            <h1> {profile.name}</h1>
            <p> profile.description </p>
            <p> universidad universal</p>
            <a href={profile.linkedin}><i className="Linkedin"></i></a>
            <a href={profile.github}><i className="Github"></i></a>
        </div>
    </div>

        )
    
        )
    }

export default CardContact
