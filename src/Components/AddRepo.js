import React from 'react'
import ReactDOM from 'react-dom';
import './Style.css'
function AddRepo(props) {
        return(props.trigger)?( 
        <div className="AddRepo">
            <h2>ADD NEW REPOSITORY</h2>
            <p>Owner/Organizaion</p>
            <p><input type="text" id="org"/></p>
            <p>Repository Name</p>
            <p><input type="text" id="name"/></p>

            <p><button onClick={()=>{
              let org = document.getElementById("org").value;
              let name = document.getElementById("name").value;
              props.setRepoList(arr=>[...arr,[org,name]])
              props.setTrigger(false);
            }}>Add Repo</button></p>
        </div>
        ):"";
}

export default AddRepo
