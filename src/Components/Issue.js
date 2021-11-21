import React from 'react'
import './Style.css'
function Issue({title,src,author}) {
    return (
        <div className="issue">
            <h3>{title}</h3>
            <div className="containter">
                <img src={src}/>
                <p>{author}</p>    
            </div>
        </div>
    )
}

export default Issue
