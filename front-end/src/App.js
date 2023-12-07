import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import ProjectsNavMenu from "./menus/ProjectsNavMenu";
import Project from "./projects/Project";
import EquipmentCatalog from "./equipment/EquipmentCatalog";
import { NavBarTop } from "./menus/NavBarTop";
import StudyHV from "./studies/StudyHV";
import StudyMvCircuits from "./studies/StudyMvCircuits";
import StudyModules from "./studies/StudyModules";

/**
 * Defines the root application component.
 * @returns {JSX.Element}
 */

function App() {
  return (
    <div>
      <div>
        <NavBarTop />
      </div>
      <Routes>
        {/* <Route path="/" element={<Layout />} /> */}
        <Route path="/" element={<ProjectsNavMenu />} />

        <Route path="/projects/:projectId" element={<Project />} />

        <Route path="/projects/:projectId/hv" element={<StudyHV />} />

        <Route
          path="/projects/:projectId/mv-circuits"
          element={<StudyMvCircuits />}
        />

        <Route path="/projects/:projectId/modules" element={<StudyModules />} />

        <Route exact path="/equipment" element={<EquipmentCatalog />} />
      </Routes>
    </div>
  );
}

export default App;
