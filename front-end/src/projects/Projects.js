import React, { useState, useEffect } from "react";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
  Link,
} from "react-router-dom";
import { listProjects } from "../utils/api";
import Project from "./Project";

function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    function retrieveProjects() {
      const abortController = new AbortController();
      listProjects(abortController.signal).then(setProjects);
      return () => abortController.abort();
    }

    retrieveProjects();
  }, []);

  const list = projects.map((project) => (
    // <div>
    //   <div>Project ID: {project.project_id}</div>
    //   <div>Project Code: {project.project_code}</div>
    //   <div>Project Name: {project.project_name}</div>
    //   <div>Project Client ID: {project.client_id}</div>
    //   <div>Project Owner ID: {project.owner_id}</div>
    // </div>

    // <div>
    //   <Project project={project} />
    // </div>
    <div>
      <Link to={`/projects/${project.project_id}`} className="btn btn-primary">
        {project.project_name}
      </Link>
    </div>
  ));

  return (
    <div>
      <h4>{list}</h4>
    </div>
  );
}

export default Projects;
