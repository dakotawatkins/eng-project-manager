import React from "react";
import { Route, Routes, Switch } from "react-router-dom";
import NavMenu from "./layout/NavMenu";

/**
 * Defines the root application component.
 * @returns {JSX.Element}
 */

function App() {
  return (
    <div>
      {/* <Switch> */}
      <Route path="/">
        <NavMenu />
      </Route>
      {/* </Switch> */}
    </div>
  );
}

export default App;
