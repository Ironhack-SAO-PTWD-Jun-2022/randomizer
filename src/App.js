import "./App.css";
import Sidebar from "./components/Sidebar";

const testInfo = [
  {
    _id: "6311392ee0e8fd00178245b8",
    name: "Cohort 78",
    students: [
      "Caio",
      "Gabriel",
      "Hélio",
      "Hugo",
      "Jandson",
      "João",
      "Renata",
      "Walison",
    ],
  },
  {
    _id: "63113976e0e8fd00178245b9",
    name: "Pets",
    students: ["José", "Joaquim", "Nina", "Apollo", "Spike", "Merlin"],
  },
];

function App() {
  return (
    <div className="App">
      <h1>Hello, Ironhackers!</h1>
      <p>base project for the randomizer</p>
      <Sidebar cohortArr={testInfo} />
    </div>
  );
}

export default App;
