import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Repos from "./Components/Repos";
import AddRepo from "./Components/AddRepo";
import { useEffect, useState } from "react";
import LeftPane from "./Components/LeftPane";
function App() {
  const [RepoList, setRepoList] = useState([]);
  const [PopUp, setPopUp] = useState(false);
  const [RepoDesc, setRepoDesc] = useState([]);
  const [Current, setCurrent] = useState([]);
  const [Branches, setBranches] = useState([]);
  const [Issues, setIssues] = useState({})
  useEffect(() => {
    if (RepoList.length) {
      fetch("https://api.github.com/repos/" + RepoList[0] + "/" + RepoList[1])
        .then((res) => res.json())
        .then((data) => {
          setRepoDesc((arr) => [...arr, data]);
        });
    }
  }, [RepoList]);
  useEffect(() => {
    if (Current[0] !== undefined) {
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
    }
  }, [Current]);
  return (
    <>
      <Header />
      <Repos RepoDesc={RepoDesc} curr={setCurrent} />
      <LeftPane branches={Branches} issues={Issues} />
      <button
        style={{ clear: "both" }}
        className="addButton"
        onClick={() => setPopUp(true)}
      >
        +
      </button>
      <AddRepo
        trigger={PopUp}
        setTrigger={setPopUp}
        setRepoList={setRepoList}
      />
    </>
  );
}

export default App;
