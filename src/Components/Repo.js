import React from 'react'
import './Style.css'
function Repo({name,desc,curr,owner}) {
    return (
        <div className="Repo" onClick={()=>{
            curr([owner,name]);
        }}>
            <p><b>{name}</b></p>
            <p>{desc}</p>
        </div>
    )
}

export default Repo
