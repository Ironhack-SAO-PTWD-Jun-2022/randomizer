import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <div>
          <Route path="/" element={<Navbar />} />
        </div>

        <div>
          <div>
            <Route path="/Sidebar" element={<Sidebar />} />
          </div>
          <div>
            <Route path="/Container" element={<Container />} />
          </div>
        </div>
        <div>
          <Route path="/Footer" element={<Footer />} />
        </div>
      </Routes>
    </div>
  );
}

export default App;
