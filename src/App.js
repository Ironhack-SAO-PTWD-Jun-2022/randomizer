import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>

      <div>
        <div>
          <Sidebar />
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
