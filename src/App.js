import "./App.css";
import Sidebar from "./components/Sidebar";
import axios from "axios";
import { useState, useEffect } from "react";

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
      <h1>Hello, Ironhackers!</h1>
      <p>base project for the randomizer</p>
      <Sidebar cohortArr={cohorts} />
      <Routes></Routes>
      <Footer />
    </div>


  );
}

export default App;
