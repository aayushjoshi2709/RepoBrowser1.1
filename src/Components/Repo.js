import React from "react";
import "./Style.css";
function Repo({ name, desc, curr, owner
}) {
  return (
    <div
      className="card p-2 m-1"
      onClick={() => {
        curr([owner, name]);
      }}
    >
      <div className="card-title">
        <b>{name}</b>
      </div>
      <div className="card-text">{desc}</div>
    </div>
  );
}

export default Repo;
