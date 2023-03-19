import React, { useEffect, useState } from "react";
import { readProject } from "../utils/api";

const DisplayProject = ({ project }) => {
  const {
    project_id,
    project_code,
    project_name,
    client_id,
    owner_id,
    project_design_life,
  } = project;

  const [currentProject, setCurrentProject] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    project_id && readProject(project_id).then(setCurrentProject);
    return () => abortController.abort();
  }, [project_id]);

  return (
    <>
      <div>
        <div>
          <h1>{project_id}</h1>
        </div>
        <div>
          <h1>{project_code}</h1>
        </div>
        <div>
          <h1>{project_name}</h1>
        </div>
        <div>
          <h1>{client_id}</h1>
        </div>
        <div>
          <h1>{owner_id}</h1>
        </div>
        <div>
          <h1>{project_design_life}</h1>
        </div>
      </div>
    </>
  );
};

export default DisplayProject;
