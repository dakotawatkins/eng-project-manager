import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { listProjects } from "../utils/api";

export default function DirectNavToProject() {
  const [projects, setProjects] = useState([]);

  // on mount, retrieve projects
  useEffect(() => {
    function retrieveProjects() {
      const abortController = new AbortController();
      listProjects(abortController.signal).then(setProjects);
      return () => abortController.abort();
    }

    retrieveProjects();
  }, []);

  const list = projects.map((project) => (
    <button key={project.project_id} className="proj-btn">
      <Link to={`/projects/${project.project_id}`}>{project.project_name}</Link>
    </button>
  ));

  return (
    <div className="flex text-center">
      <h4>PROJECTS</h4>
      {list}
    </div>
  );
}
