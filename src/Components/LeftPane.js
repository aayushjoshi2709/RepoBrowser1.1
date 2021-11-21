import React from 'react'
import BranchIssue from './BranchIssue'
import './Style.css'
function LeftPane({branches,issues}) {
    return (
        <div id="left-pane">
            <div className="container">
            <button>Delete </button>
            </div>
            <BranchIssue  Branches={branches} Issues={issues} />
        </div>
    )
}

export default LeftPane
