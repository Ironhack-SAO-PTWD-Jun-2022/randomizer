import "./App.css";
import Sidebar from "./components/Sidebar";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [cohort, setCohort] = useState([]);

  useEffect(() => {
    axios
      .get("https://ironrest.herokuapp.com/randomizer78")
      .then((response) => setCohort(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <h1>Hello, Ironhackers!</h1>
      <p>base project for the randomizer</p>
      <Sidebar cohortArr={cohort} />
    </div>
  );
}

export default App;
