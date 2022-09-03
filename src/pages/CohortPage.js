import { Link, Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../styles/cohortPage.css";

const CohortPage = (props) => {
  const { cohortId } = useParams();

  const foundCohort = props.cohortArr.find((cohort) => cohort._id === cohortId);

  console.log(props.cohortArr);
  console.log("found", foundCohort.students);

  return (
    <div className="cohort-main-container">
      <div className="cohort-list">
        <h2>Alunos</h2>
        {foundCohort.students.map((cohort) => {
          {
            console.log("count");
          }
          return <p>{cohort}</p>;
        })}
      </div>
      <div className="middle">
        <h2>{foundCohort.name}</h2>
        <div className="buttons-main-container">
          <div className="randomizer-btn">
            <Link to="DUPLAS">
              <button>Duplas</button>
            </Link>
            <Link to="RANDOM">
              <button>Ordem Aleatória</button>
            </Link>
            <Link to="SELECIONAR_UM">
              <button> Selecionar 1</button>
            </Link>
            <Link to="DUPLAS">
              <button>Duplas</button>
            </Link>
            {/* <button onClick={"HANDLE_RESET"}>Reset</button> */}
          </div>
          <div className="another-page-btn">
            <Link to={`/edit/${foundCohort.id}`}>
              <button>Editar</button>
            </Link>
            <Link to="/" onClick={"REMOVE_FUNCTION"}>
              <button>Remover</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="randomized">
        <Routes>
          <Route
            path="/:COMPOMENTE_SORTEIO"
            element={"COMPOMENTE_SORTEIO"}
          ></Route>
        </Routes>
      </div>
    </div>
  );
};

export default CohortPage;
