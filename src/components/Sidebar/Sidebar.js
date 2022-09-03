import "./Sidebar.css";

import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div className="sidebar-container">
      <div className="cohort-container">
        {props.cohortArr.map((cohort) => {
          return (
            <Link to={`/${cohort._id}`} key={cohort._id} className="cohort">
              <p>{cohort.name}</p>
            </Link>
          );
        })}
      </div>
      <Link to="/add-cohort">
        <button className="sidebar-btn">Adicionar Turma</button>
      </Link>
    </div>
  );
};

export default Sidebar;
