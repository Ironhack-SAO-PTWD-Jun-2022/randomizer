import { Link, Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";

import "../styles/cohortPage.css";

const CohortPage = (props) => {
  const { cohortId } = useParams();

  const foundCohort = props.cohortArr.find((cohort) => cohort._id === cohortId);

  return (
    <div className="cohort-main-container">
      <div className="cohort-list">
        <h2>Alunos</h2>
        {foundCohort.students.map((student) => {
          {
          }
          return <p key={student}>{student}</p>;
        })}
      </div>
      <div className="middle">
        <h2>{foundCohort.name}</h2>
        <div className="buttons-main-container">
          <div className="randomizer-btn">
            <Link to={`/${foundCohort._id}/COMPONENTE_SORTEIO_DUPLAS`}>
              <button>Duplas</button>
            </Link>
            <Link to={`/${foundCohort._id}/COMPONENTE_SORTEIO_RANDOM`}>
              <button>Ordem Aleatória</button>
            </Link>
            <Link to={`/${foundCohort._id}/COMPONENTE_SORTEIO_SELECIONAR1`}>
              <button> Selecionar 1</button>
            </Link>
            {/* <Link to={`/${foundCohort._id}/COMPONENTE_SORTEIO_DUPLAS`}>
              <button>Duplas</button>
            </Link> */}
            {/* <button onClick={"HANDLE_RESET"}>Reset</button> */}
          </div>
          <div className="another-page-btn">
            <Link to={`/edit/${foundCohort._id}`}>
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
            path="/COMPONENTE_SORTEIO_DUPLAS"
            element={"COMPONENTE_SORTEIO_DUPLAS"}
          ></Route>
          <Route
            path="/COMPONENTE_SORTEIO_RANDOM"
            element={"COMPONENTE_SORTEIO_RANDOM"}
          ></Route>
          <Route
            path="/COMPONENTE_SORTEIO_SELECIONAR1"
            element={"COMPONENTE_SORTEIO_SELECIONAR1"}
          ></Route>
        </Routes>
      </div>
    </div>
  );
};

export default CohortPage;
