import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { readProject } from "../utils/api";

function Project() {
  const { projectId } = useParams();

  const [projectInfo, setProjectInfo] = useState(false);
  const [project, setProject] = useState({});
  const [error, setError] = useState(null);

  function loadProject(projectId) {
    setError(null);
    const abortController = new AbortController();
    readProject(projectId, abortController.signal)
      .then(setProject)
      .catch(setError);
    return () => abortController.abort();
  }

  useEffect(() => {
    loadProject(projectId);
  }, [projectId]);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setProjectInfo(true);
          }}
        >
          {project.project_code} - {project.project_name}
        </button>
      </div>

      {/* {projectInfo === true && (
        <div>
          <div>Project ID: {project.project_id}</div>
          <div>Project Code: {project.project_code}</div>
          <div>Project Name: {project.project_name}</div>
          <div>Project Client ID: {project.client_id}</div>
          <div>Project Owner ID: {project.owner_id}</div>
        </div>
      )} */}
      <div>
        <div>Project ID: {project.project_id}</div>
        <div>Project Code: {project.project_code}</div>
        <div>Project Name: {project.project_name}</div>
        <div>Project Client ID: {project.client_id}</div>
        <div>Project Owner ID: {project.owner_id}</div>
      </div>
    </div>
  );
}
export default Project;
