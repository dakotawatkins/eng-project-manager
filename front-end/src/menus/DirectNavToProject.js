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
      <button className="proj-btn">OC Solar</button>
      <button className="proj-btn">Tri-Tip Solar</button>
      <button className="proj-btn">River Crest Solar</button>
      <button className="proj-btn">Dakota's Test Solar</button>
      <button className="proj-btn">Example Solar</button>
      <button className="proj-btn">Another Ex Solar</button>
      <button className="proj-btn">Extremely Long Text Solar</button>
      <button className="proj-btn">Mount Saint Hellens Solar Co.</button>
      <button className="proj-btn">Zach's Solar</button>
      <button className="proj-btn">Urban Solar LLC</button>
      <button className="proj-btn">Bed'N Breakfast Solar</button>
      <button className="proj-btn">Cannon Beach Solar</button>
      <button className="proj-btn">Indian Heaven Solar</button>
      <button className="proj-btn">Paradise Park LLC</button>
      <button className="proj-btn">Test Solar LLC</button>
      <button className="proj-btn">Example 2 Solar</button>
      <button className="proj-btn">Angel's Rest Solar</button>
      <button className="proj-btn">Example 3 Solar</button>
      <button className="proj-btn">Example 4 Solar</button>
      <button className="proj-btn">Example 5 Solar</button>
    </div>
  );
}
