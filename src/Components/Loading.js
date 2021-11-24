import React from 'react'
import './Style.css'
function Loading({trigger}) {
    return trigger?(
        <div id="loading">
            Loading...
        </div>
    ):"";
}

export default Loading 
