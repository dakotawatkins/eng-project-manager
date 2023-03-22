import React, { useState, useEffect } from "react";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import { listProjects } from "../utils/api";
import Projects from "../projects/Projects";

function ProjectsNavMenu() {
  // const [projects, setProjects] = useState([]);
  // useEffect(() => {
  //   function retrieveProjects() {
  //     const abortController = new AbortController();
  //     listProjects(abortController.signal).then(setProjects);
  //     return () => abortController.abort();
  //   }

  //   retrieveProjects();
  // }, []);

  // const list = projects.map((project) => (
  //   <div>
  //     <div>Project ID: {project.project_id}</div>
  //     <div>Project Code: {project.project_code}</div>
  //     <div>Project Name: {project.project_name}</div>
  //     <div>Project Client ID: {project.client_id}</div>
  //     <div>Project Owner ID: {project.owner_id}</div>
  //   </div>
  // ));

  return (
    <div>
      <h1>PROJECTS</h1>
      <Projects />
    </div>
  );
}

export default ProjectsNavMenu;
