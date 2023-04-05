import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { readProject, readSiteProject } from "../utils/api";

function Project() {
  const { projectId } = useParams();

  const [projectInfo, setProjectInfo] = useState(false);
  const [project, setProject] = useState({});
  const [siteProject, setSiteProject] = useState({});
  const [error, setError] = useState(null);

  function loadProject(projectId) {
    setError(null);
    const abortController = new AbortController();
    readProject(projectId, abortController.signal)
      .then(setProject)
      .catch(setError);
    return () => abortController.abort();
  }

  function loadSiteProject(projectId) {
    setError(null);
    const abortController = new AbortController();
    readSiteProject(projectId, abortController.signal)
      .then(setSiteProject)
      .catch(setError);
    return () => abortController.abort();
  }

  useEffect(() => {
    loadProject(projectId);
    loadSiteProject(projectId);
  }, [projectId]);

  return (
    <div>
      <div>
        <div>Project ID: {project.project_id}</div>
        <div>Project Code: {project.project_code}</div>
        <div>Project Name: {project.project_name}</div>
        <div>Project Client ID: {project.client_id}</div>
        <div>Project Owner ID: {project.owner_id}</div>
      </div>
      <div>{siteProject.site_id}</div>
    </div>
  );
}
export default Project;
