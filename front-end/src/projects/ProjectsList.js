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
    <div className="test-container">
      <div className="proj-list-left">
        <h4>CURRENT PROJECTS</h4>
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
      <div className="proj-list-right">
        {activeProject && (
          <div className="proj-disp-container">
            <h3>{activeProject.project_name.toUpperCase()}</h3>
            <a
              className="close-btn"
              onClick={(e) => {
                e.preventDefault();
                setActiveProject("");
                console.log(activeProject, "project closed");
              }}
            >
              Close
            </a>
            <div className="site-map">
              {activeProject.project_id === 1 && <img src={site_map_1} />}
              {activeProject.project_id === 2 && <img src={site_map_2} />}
              {activeProject.project_id === 3 && <img src={site_map_3} />}
            </div>
            <Link className="" to={`/projects/${activeProject.project_id}`}>
              To Project Home Page
            </Link>
            <div className="proj-gen-info">
              <div>
                <span>Project ID: </span>
                {activeProject.project_id}
              </div>
              <div>
                <span>Project Code: </span> {activeProject.project_code}
              </div>
              <div>
                <span>Project Name: </span> {activeProject.project_name}
              </div>
              <div>
                <span>Project Client ID: </span> {activeProject.client_id}
              </div>
              <div>
                <span>Project Owner ID: </span> {activeProject.owner_id}
              </div>
            </div>
          </div>
        )}
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
