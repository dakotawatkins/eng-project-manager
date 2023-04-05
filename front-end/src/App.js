import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import ProjectsNavMenu from "./menus/ProjectsNavMenu";
import Project from "./projects/Project";
import EquipmentCatalog from "./equipment/EquipmentCatalog";
/**
 * Defines the root application component.
 * @returns {JSX.Element}
 */

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Layout />} /> */}
        <Route path="/" element={<ProjectsNavMenu />} />

        <Route exact path="/projects/:projectId" element={<Project />} />

        <Route exact path="/equipment" element={<EquipmentCatalog />} />
      </Routes>
    </div>
  );
}

export default App;
