import "./App.css";
import Sidebar from "./components/Sidebar";
import axios from "axios";
import { useState, useEffect } from "react";

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

        <Routes>
          <div>
            <Route path="/" element={<Home />} />
            <Route path="/:cohortId" element={<Turma />} />
            <Route path="/add-cohort" element={<AddTurma />} />
            <Route path="/edit/:cohortId" element={<EditTurma />} />
          </div>
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
