import React from 'react'

function Repo(props) {
    return (

        <div className="Repo">
            <p><b>{props.name}</b></p>
            <p>{props.desc}</p>
        </div>
    )
}

export default Repo
