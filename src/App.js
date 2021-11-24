import "./App.css";
import Header from "./Components/Header";
import Repos from "./Components/Repos";
import AddRepo from "./Components/AddRepo";
import { useEffect, useState } from "react";
import LeftPane from "./Components/LeftPane";
import Loading from "./Components/Loading";
function App() {
  const [RepoList, setRepoList] = useState([]);
  const [PopUp, setPopUp] = useState(false);
  const [RepoDesc, setRepoDesc] = useState([]);
  const [Current, setCurrent] = useState([]);
  const [Branches, setBranches] = useState([]);
  const [Issues, setIssues] = useState({})
  const [loading,setLoading] =useState(false)
  useEffect(() => {
    if (RepoList.length) {
      setLoading(true)
      fetch("https://api.github.com/repos/" + RepoList[0] + "/" + RepoList[1])
        .then((res) => res.json())
        .then((data) => {
          setRepoDesc((arr) => [...arr, data]);
        });
    }
    setLoading(false)
  }, [RepoList]);
  useEffect(() => {
    if (Current[0] !== undefined) {
      setLoading(true)
      fetch(
        "https://api.github.com/repos/" +
          Current[0] +
          "/" +
          Current[1] +
          "/branches"
      )
        .then((res) => res.json())
        .then((data) => {
          setBranches(data);
        });
        
      fetch(
          "https://api.github.com/repos/" +
            Current[0] +
            "/" +
            Current[1] +
            "/issues"
        )
          .then((res) => res.json())
          .then((data) => {
            setIssues(data);
          });
      setLoading(false);
    }
  }, [Current]);
  return (
    <div className="container-fluid m-0 p-0">
      <Header />
      <div className="container-fluid row p-2 overflow-hidden" style={{height:"88vh"}}>
      <Repos RepoDesc={RepoDesc} curr={setCurrent} setPopUp={setPopUp}/>
      <LeftPane branches={Branches} issues={Issues} />
      </div>   
      <Loading trigger={loading}/>
      
      <AddRepo
        trigger={PopUp}
        setTrigger={setPopUp}
        setRepoList={setRepoList}
      />
    </div>
  );
}

export default App;
