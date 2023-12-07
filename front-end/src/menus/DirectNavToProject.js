import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import { listProjects } from "../utils/api";
import Project from "../projects/Project";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';


export default function DirectNavToProject() {

  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState();
  // console.log(activeProject, "active project")
  // console.log('project', projects)


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


  const defaultProps = {
    options: projects,
    getOptionLabel: (option) => option.project_name || "",
  };

  const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.project.project_name
    ,
  });

  const handleClick = (newValue) => {
    // console.log('clicking project', newValue.project_id)
    window.location.replace(`/projects/${newValue.project_id}`);

  };

  return (
    // Autocomplete is used to select/search for project.
    <div >
      <Box sx={{ overflow: 'auto' }}>
        <Autocomplete
          {...defaultProps}
          // filterOptions={filterOptions}
          autoHighlight //auto highlights first option, so on Enter, selects that option
          autoSelect
          value={(activeProject)}
          sx={{ width: 250 }}
          renderInput={(params) => <TextField {...params} label="Project" />}
          onChange={(event, newValue) => (
            handleClick(newValue)
            )
          }
        />           
      </Box>

    </div>
  );
}

