import React from 'react'
import Branch from './Branch'
import './Style.css'
import { useState } from 'react'
import Issue from './Issue'
function BranchIssue({Branches,Issues}) {
    const [IsBranch, setIsBranch] = useState(true)
    return (
        <div id="branch-issue">
            <div id="container">
                <div id="branch" className="tabs" onClick={()=>setIsBranch(true)}>Branches</div>
                <div id="issue" className="tabs" onClick={()=>setIsBranch(false)}>Issues</div>
                
            </div>
            <div id="branch-container">
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
