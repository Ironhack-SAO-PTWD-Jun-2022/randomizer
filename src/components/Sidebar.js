import "../styles/sidebar.css";
import Turma from "./Turma";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div className="sidebar-container">
      <div className="turmas-container">
        {props.cohortArr.map((cohort) => {
          return (
            <Link to={`/:${cohort._id}`} key={cohort._id}>
              <Turma cohort={cohort} />
            </Link>
          );
        })}
      </div>
      {/* <Link to="/add-cohort"> */}
      <button className="sidebar-btn">Adicionar Turma</button>
      {/* </Link> */}
    </div>
  );
};

export default Sidebar;
