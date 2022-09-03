import "./App.css";
import Sidebar from "./components/Sidebar";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from './components/Navbar'
import { Route, Routes } from "react-router-dom";

function App() {
  const [cohorts, setCohorts] = useState([]);

  useEffect(() => {
    axios
      .get("https://ironrest.herokuapp.com/randomizer78")
      .then((response) => setCohorts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <div>
        <Navbar />
      </div>

      <div>
        <div>
        <Sidebar cohortArr={cohorts} />
        </div>

        <div>
        <Routes>
         
            <Route path="/" element={<div>Home</div>} />
            <Route path="/:cohortId" element={<div>Turma especifica</div>} />
            <Route path="/add-cohort" element={<div>Add cohort</div>} />
            <Route path="/edit/:cohortId" element={<div>Edit cohort</div>} />
        </Routes>
          </div>
      </div>
      <div>
        Footer
      </div>
    </div>
  );
}

export default App;
