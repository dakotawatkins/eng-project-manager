import React, { useState, useEffect } from "react";
import { Link, Redirect, Switch, useLocation } from "react-router-dom";
import { listProjects } from "../utils/api";
/*
Defines the left panel menu for this application.
*/

function NavMenu() {
  const [projects, setProjects] = useState([]);
  const [projectsError, setProjectsError] = useState(null);

  // const query = useQuery();
  // const history = useHistory();
  const location = useLocation();

  // Use useEffect hook to call loadDashboard function whenever date changes.
  useEffect(loadDashboard, [projects]);

  // Makes an api call to retrieve projects to display on dashboard
  function loadDashboard() {
    const abortController = new AbortController();
    setProjectsError(null);

    // Uses provided listProjects() to retrieve all projects for a given date on the dashboard
    listProjects(abortController.signal)
      .then(setProjects)
      .catch(setProjectsError);
    return () => abortController.abort();
  }

  const projectsJSX = () => {
    return projects.map((project) => (
      <Link
        className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
        to="/"
        key={project.project_id}
        project={project}
      >
        <div className="sidebar-brand-text mx-3">
          <span>{project}</span>
        </div>
      </Link>
    ));
  };

  return (
    <nav className="navbar navbar-dark align-items-start p-0">
      <div className="container-fluid d-flex flex-column p-0">
        {projectsJSX}
      </div>
    </nav>
  );
}

export default NavMenu;
