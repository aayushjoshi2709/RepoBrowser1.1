import React from "react";
import "./Style.css";
function AddRepo(props) {
  console.log(props.trigger);
  return props.trigger ? (
    <div className="container AddRepo w-25 fixed-top addRepo">
    <div className="card text-white bg-success  p-2 ">
      <div className="card-header"><h3>ADD NEW REPOSITORY</h3></div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label htmlFor="org">Owner/Organizaion</label>
            <input
              type="text"
              className="form-control"
              id="org"
              placeholder="Enter Owner/Organizaion Name"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="name">Repository Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Repo... Name"
            ></input>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => {
              let org = document.getElementById("org").value;
              let name = document.getElementById("name").value;
              props.setRepoList([org, name]);
              props.setTrigger(false);
            }}
          >
            Add Repo
          </button>
          <button
            className="btn btn-danger m-2"
            onClick={() => {
              props.setTrigger(false);
            }}
          >
            Close
          </button>
        </form>
      </div>
    </div>
    </div>
  ) : (
    ""
  );
}

export default AddRepo;
