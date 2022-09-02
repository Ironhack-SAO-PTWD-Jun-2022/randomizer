import './RandomList.css'

function RandomList() {
    const StudentsArr = ["aluno1", "aluno2", "aluno3"];

let randomIndex = Math.floor(Math.random() * StudentsArr.length);

const randomList = () => {
    for (let i = 0; i < StudentsArr.length; i++) {
        return (
        <div>
            <ol>
                <li>{StudentsArr[randomIndex]}</li>
            </ol>
        </div>
        ) 
    }
}

    return (
    <div className="random-list">
        <h1>Ordem Aleatória</h1>
        {randomList()}
    </div>
    );
}
export default RandomList;
