import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { listProjects } from "../utils/api";
import site_map_1 from "../assets/images/site_map_1.png";
import site_map_2 from "../assets/images/site_map_2.png";
import site_map_3 from "../assets/images/site_map_3.png";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState("");

  // on mount, retrieve projects
  useEffect(() => {
    function retrieveProjects() {
      const abortController = new AbortController();
      listProjects(abortController.signal).then(setProjects);
      return () => abortController.abort();
    }
    // console.log(projects, "projects");
    retrieveProjects();
  }, []);

  return (
    <div className="lb-project-list">
      <h3>PROJECTS</h3>
      <div className="proj-display">
        <div className="proj-col-left">
          {projects.map((project) => (
            <button
              key={project.project_id}
              className="proj-btn"
              onClick={(e) => {
                e.preventDefault();
                setActiveProject(project);
                console.log(activeProject, "active project");
              }}
            >
              {project.project_name}
            </button>
          ))}
        </div>
        <div className="proj-col-right">
          {activeProject && (
            <div className="proj-info">
              <h3>{activeProject.project_name.toUpperCase()}</h3>
              <button
                className="close-btn"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveProject("");
                  console.log(activeProject, "project closed");
                }}
              >
                Close
              </button>
              {activeProject.project_id === 1 && (
                <img className="site-map" src={site_map_1} />
              )}
              {activeProject.project_id === 2 && (
                <img className="site-map" src={site_map_2} />
              )}
              {activeProject.project_id === 3 && (
                <img className="site-map" src={site_map_3} />
              )}
              <Link
                className="proj-link"
                to={`/projects/${activeProject.project_id}`}
              >
                To Project Home Page
              </Link>
              <div className="proj-info-text">
                <div>Project ID: {activeProject.project_id}</div>
                <div>Project Code: {activeProject.project_code}</div>
                <div>Project Name: {activeProject.project_name}</div>
                <div>Project Client ID: {activeProject.client_id}</div>
                <div>Project Owner ID: {activeProject.owner_id}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { listProjects } from "../utils/api";
// import Project from "./Project";

// function Projects() {
//   const [projects, setProjects] = useState([]);
//   useEffect(() => {
//     function retrieveProjects() {
//       const abortController = new AbortController();
//       listProjects(abortController.signal).then(setProjects);
//       return () => abortController.abort();
//     }

//     retrieveProjects();
//   }, []);

//   const list = projects.map((project) => (
//     // <div>
//     //   <div>Project ID: {project.project_id}</div>
//     //   <div>Project Code: {project.project_code}</div>
//     //   <div>Project Name: {project.project_name}</div>
//     //   <div>Project Client ID: {project.client_id}</div>
//     //   <div>Project Owner ID: {project.owner_id}</div>
//     // </div>

//     // <div>
//     //   <Project project={project} />
//     // </div>

//     <div key={project.project_id}>
//       <Link to={`/projects/${project.project_id}`} className="btn btn-primary">
//         {project.project_name}
//       </Link>
//     </div>
//   ));

//   return (
//     <div>
//       <h4>{list}</h4>
//     </div>
//   );
// }

// export default Projects;
