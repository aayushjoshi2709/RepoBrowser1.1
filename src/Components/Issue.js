import React from 'react'
import './Style.css'
function Issue({title,src,author}) {
    return (
        <div className="card p-2">
            <div className="card-title"><b>{title}</b></div>
            <div className="card-body m-0 p-0">
            <img className="card-img-top mr-2" src={src} alt="not found"/>
            <div className="card-text">{author}</div>    
            </div>
        </div>
    )
}

export default Issue
