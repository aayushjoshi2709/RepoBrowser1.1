import React from "react";
import Repo from "./Repo";
import "./Style.css";
import { useEffect } from "react";

function Repos({RepoDesc}) {
    return (
        <div className="Repos">
                    {RepoDesc.map(repo => (
                         <Repo key={repo["id"]} name={repo["name"]} desc={repo["description"]}/>
                    ))
                    }
        </div>
  );
}

export default Repos;
