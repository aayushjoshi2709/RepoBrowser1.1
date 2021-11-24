import React from "react";
import Repo from "./Repo";
import "./Style.css";
function Repos({RepoDesc,curr,setPopUp}) {
    return (
        <div className="container-fluid col-4 h-100 border border-darks overflow-hidden">
          <div>        
            <h1 className="display-4">Repos</h1>
          </div>
          <div className="container-fluid h-75 m-0 p-0 border border-darks overflow-auto">               
                      {(RepoDesc!==undefined)?RepoDesc.map(repo => (
                          <Repo key={repo["id"]} name={repo["name"]} desc={repo["description"]} owner={repo["owner"]["login"] }curr={curr}/>
                      )):""
                      }
          </div>
          <div className="p-2">        
          <button 
              className="btn btn-primary addButton"
              onClick={() => setPopUp(true)}
            >
              +
            </button>
         </div>
        </div>

  );
}

export default Repos;
