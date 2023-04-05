import { Route, Routes } from "react-router-dom";
import ProjectsNavMenu from "../menus/ProjectsNavMenu";
import Project from "../projects/Project";
import EquipmentCatalog from "../equipment/EquipmentCatalog";

/**
 * Defines all the routes for the application.
 * @returns {JSX.Element}
 */

function Roots() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<ProjectsNavMenu />} />

        <Route exact path="/projects/:projectId" element={<Project />} />

        <Route exact path="/equipment" element={<EquipmentCatalog />} />
      </Routes>
    </div>
  );
}

export default Roots;
