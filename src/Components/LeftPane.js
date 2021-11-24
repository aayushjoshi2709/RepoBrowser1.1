import React from 'react'
import BranchIssue from './BranchIssue'
import './Style.css'
function LeftPane({branches,issues}) {
    return (
        <div className="container-fluid col-8 h-100 border border-darks" id="left-pane">
            <div className="container">
            <button className="btn btn-primary">Delete </button>
            </div>
            <BranchIssue  Branches={branches} Issues={issues} />
        </div>
    )
}

export default LeftPane
