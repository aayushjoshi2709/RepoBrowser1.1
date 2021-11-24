import React from 'react'

function Branch({name}) {
    return (
        <div className="card p-2">
            <div className="card-text">
            {name}
            </div>
        </div>
    )
}

export default Branch
