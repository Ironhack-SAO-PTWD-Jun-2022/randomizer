import "./RandomList.css";

function RandomList({ students }) {

console.log('students', students)

if(!students) return <p>Não há estudantes!</p>



const random = () => {
    let newArr = [];
    const studentsCopy = [...students];
    
    for (let i = 0; i < students.length; i++) {
        let randomIndex = Math.floor(Math.random() * studentsCopy.length);
        let randomStudent = studentsCopy.splice(randomIndex, 1)[0]
        newArr.push(randomStudent)
    }
        return newArr;
    }

  let newOrderArr = random(); 

  console.log('newOrderArr', newOrderArr)

  return (
    <div className="random-list">
      <h1>Ordem Aleatória</h1>
      <ol>
        {newOrderArr.map((student, index) => {
          return <li key={index}>{student}</li>;
        })}
      </ol>
    </div>
  );
}
export default RandomList;
