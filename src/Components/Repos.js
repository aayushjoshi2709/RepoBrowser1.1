import React from "react";
import Repo from "./Repo";
import "./Style.css";
import { useEffect } from "react";

function Repos({RepoDesc,curr}) {
    return (
        <div className="Repos">
                    
                    {(RepoDesc!==undefined)?RepoDesc.map(repo => (
                         <Repo key={repo["id"]} name={repo["name"]} desc={repo["description"]} owner={repo["owner"]["login"] }curr={curr}/>
                    )):""
                    }
        </div>
  );
}

export default Repos;
