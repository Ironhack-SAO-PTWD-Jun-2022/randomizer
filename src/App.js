import './App.css';
import RandomList from './components/RandomList';

function App(props) {

  return (
    <div className="App">
      <h1>Hello, Ironhackers!</h1>
      <p>base project for the randomizer</p>
      <RandomList students={props}/>
    </div>
  );
}

export default App;
