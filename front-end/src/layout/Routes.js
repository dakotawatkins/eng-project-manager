import React, { useState, useEffect } from "react";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import ProjectsNavMenu from "../menus/ProjectsNavMenu";
import Project from "../projects/Project";

/**
 * Defines all the routes for the application.
 * @returns {JSX.Element}
 */

function Routes() {
  return (
    <>
      <ProjectsNavMenu />

      <Route exact path="/projects/:projectId">
        <Project />
      </Route>
      {/* <Switch>
        <Route></Route>
      </Switch> */}
    </>
  );
}

export default Routes;
