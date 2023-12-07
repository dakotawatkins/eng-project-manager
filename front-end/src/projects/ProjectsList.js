import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { listProjects } from "../utils/api";
import site_map_1 from "../assets/images/site_map_1.png";
import site_map_2 from "../assets/images/site_map_2.png";
import site_map_3 from "../assets/images/site_map_3.png";

// Testing for MUI lists
// import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';



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


  // when a project is selected, it will show up as selected.
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const defaultProps = {
    options: projects,
    // getOptionLabel: (option) => option.project_name
    getOptionLabel: (option) => option.project_name || ""
  };

  const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.project_name,
  });


  return (
    <div className="test-container">
      <div className="proj-list-left">
        <div className="project-select">
          <Box sx={{ overflow: 'auto' }}>
              <Autocomplete
                  {...defaultProps}
                  disablePortal
                  // id="filter-demo"
                  // options={projects}
                  // getOptionLabel={(option) => option.project_name}
                  filterOptions={filterOptions}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Project" />}
                  value={activeProject}
                  onChange={(event, newValue) => {
                    setActiveProject(newValue)
                  }}
                />           
          </Box>
        </div>
      </div>

      <div className="proj-list-right">
        {activeProject && (
          <div className="proj-disp-container">
            {/* <button
              type="button"
              class="btn-close dw-close"
              aria-label="Close"
              onClick={(e) => {
                e.preventDefault();
                setActiveProject("");
                console.log(activeProject, "project closed");
              }}
            >

            </button> */}
            <h3>{activeProject.project_name.toUpperCase()}</h3>
            <div className="site-map">
              {activeProject.project_id === 1 && <img src={site_map_1} />}
              {activeProject.project_id === 2 && <img src={site_map_2} />}
              {activeProject.project_id === 3 && <img src={site_map_3} />}
            </div>
            <Link
              className="dw-links"
              to={`/projects/${activeProject.project_id}`}
            >
              To Project Home Page
            </Link>
            <div className="proj-gen-info">
              <table className="table text-wrap table-hover">
                <thead className="thead-dark">
                  <tr className="">
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-start">Project ID</td>
                    <td className="text-end">000{activeProject.project_id}</td>
                  </tr>
                  <tr>
                    <td className="text-start">Project Code</td>
                    <td className="text-end">{activeProject.project_code}</td>
                  </tr>
                  <tr>
                    <td className="text-start">Project Name</td>
                    <td className="text-end">{activeProject.project_name}</td>
                  </tr>
                  {/* <tr>
                    <td className="text-start">Client ID</td>
                    <td className="text-end">000{activeProject.client_id}</td>
                  </tr> */}
                  <tr>
                    <td className="text-start">Client Name</td>
                    <td className="text-end">{activeProject.client_name}</td>
                  </tr>
                  {/* <tr>
                    <td className="text-start">Owner ID</td>
                    <td className="text-end">000{activeProject.owner_id}</td>
                  </tr> */}
                  <tr>
                    <td className="text-start">Owner Name</td>
                    <td className="text-end">{activeProject.owner_name}</td>
                  </tr>
                </tbody>
              </table>
             
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
