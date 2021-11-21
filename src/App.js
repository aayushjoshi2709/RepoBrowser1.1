import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Repos from './Components/Repos';
import AddRepo from './Components/AddRepo';
import { useEffect,useState } from "react";
function App() {
  const [RepoList, setRepoList] = useState([])
  const [PopUp, setPopUp] = useState(false)
  const [RepoDesc, setRepoDesc] = useState([])
  useEffect(() => {
    if(RepoList.length){
    RepoList.map((repo)=>{
        fetch("https://api.github.com/repos/"+repo[0]+"/"+repo[1]).then((res)=>res.json()).then(
          (data)=>{
            setRepoDesc(arr=>[...arr,data])
          }
        )
    })}
    }, [RepoList])
  return (
    <>
    <Header/>
    <Repos RepoDesc={RepoDesc}/>
    
    <button style={{clear:"both"}} className="addButton" onClick={()=>setPopUp(true)}>+</button>
    <AddRepo trigger={PopUp} setTrigger={setPopUp} setRepoList={setRepoList}/>

    </>
  );
}

export default App;
