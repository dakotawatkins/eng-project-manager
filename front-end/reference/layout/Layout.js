import React from "react";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import NavMenu from "./NavMenu";
import Routes from "./Routes";

import "./Layout.css";

/**
 * Defines the main layout of the application.
 *
 * You will not need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
function Layout() {
  return (
    <Switch>
      <Route exact={true} path="/projects">
        <div className="container-fluid">
          <div className="row h-100">
            <div className="col-md-2 side-bar">
              <NavMenu />
            </div>
            {/* <div className="col">
          <Routes />
        </div> */}
          </div>
        </div>
      </Route>
    </Switch>
  );
}

export default Layout;
