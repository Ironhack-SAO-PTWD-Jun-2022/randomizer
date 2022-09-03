import './App.css';
import RandomList from './components/RandomList';
import axios from 'axios';
import {useEffect, useState} from 'react'; 

function App(props) {

const [ cohorts, setCohorts ] = useState([]);

useEffect(() => {
  axios
    .get("https://ironrest.herokuapp.com/randomizer78")
    .then((response) => {
      setCohorts(response.data)
      console.log('response', response.data)
    })
}, []); 

console.log('cohorts', cohorts)

  return (
    <div className="App">
      <h1>Hello, Ironhackers!</h1>
      <p>base project for the randomizer</p>
      <RandomList students={cohorts[0] && cohorts[0].students}/>
    </div>
  );
}

export default App;
