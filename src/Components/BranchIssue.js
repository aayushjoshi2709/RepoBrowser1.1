import React from 'react'
import Branch from './Branch'
import './Style.css'
import { useState } from 'react'
import Issue from './Issue'
function BranchIssue({Branches,Issues}) {
    const [IsBranch, setIsBranch] = useState(true)
    return (
        <div id="container h-100 overflow-hidden">
            <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link active" id="branchTab" aria-current="page" href="#" onClick={()=>{setIsBranch(true)
                    var d=document.getElementById("branchTab")
                    if(!d.classList.contains("active"))
                    { 
                     d.classList.add("active")
                     document.getElementById("IssuesTab").classList.remove("active")
                    }   
                    }}>Branch</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#" id="IssuesTab" onClick={
                    ()=>{setIsBranch(false)
                    var d=document.getElementById("IssuesTab")
                    if(!d.classList.contains("active")){
                    document.getElementById("branchTab").classList.remove("active")
                    d.classList.add("active")
                    }    
                }}>Issues</a>
            </li>
            </ul>
            <div className="container-fluid m-0 p-0  border border-darks" id="branch-issue-container">
                {(IsBranch)?(Branches!==undefined)?Branches.map(b=>(
                <Branch key={b["commit"]["sha"]} name={b["name"]}/>
            )):"":(Issues!==undefined)?Issues.map(i=>(
                <Issue title={i["title"]} author={i["user"]["login"]} src={i["user"]["avatar_url"]}/>
                    )):""}
            </div>
        </div>
    )
}

export default BranchIssue
