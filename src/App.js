import "./App.css";
import Sidebar from "./components/Sidebar";
import axios from "axios";
import { useState, useEffect } from "react";
import CohortPage from "./pages/CohortPage";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

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
      <div className="app-navbar">
        <Navbar />
      </div>

      <div className="app-mid">
        <div className="app-sidebar">
          <Sidebar cohortArr={cohorts} />
        </div>

        <div className="app-container">
          <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route
              path="/:cohortId/*"
              element={<CohortPage cohortArr={cohorts} />}
            ></Route>
            <Route path="/add-cohort" element={<div>Add cohort</div>} />
            <Route path="/edit/:cohortId" element={<div>Edit cohort</div>} />
          </Routes>
        </div>
      </div>
      <div className="app-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
