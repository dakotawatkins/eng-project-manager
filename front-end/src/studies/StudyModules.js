import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { listModules } from "../utils/api";
import DirectNavToProject from "../menus/DirectNavToProject";
import TabStudies from "../menus/TabStudies";
import Module from "../studyComponents/Module";

export default function StudyModules() {
  const { projectId } = useParams();

  const [modules, setModules] = useState([]);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("Tab2");

  function loadModules(projectId) {
    setError(null);
    const abortController = new AbortController();
    listModules(projectId, abortController.signal)
      .then(setModules)
      .catch(setError);
    return () => abortController.abort();
  }

  useEffect(() => {
    loadModules(projectId);
  }, [projectId]);

  /** iterates each transmissionLineJSX and returns a 'TransmissionLine' */
  const modulesJSX = () => {
    return modules.map(
      (module) =>
        module.project_id == projectId && (
          <Module key={module.mod_id} module={module} projectId={projectId} />
        )
    );
  };

  return (
    <div>
      <div className="proj-tabs">
        <button
          className={`${"tab"}`}
          onClick={(e) => {
            e.preventDefault();
            setActiveTab("Tab1");
            console.log(activeTab, "Tab1");
          }}
        >
          Projects
        </button>

        <button
          className={`${"tab"}`}
          onClick={(e) => {
            e.preventDefault();
            setActiveTab("Tab2");
            console.log(activeTab, "Tab2");
          }}
        >
          Studies
        </button>
      </div>

      <div>
        {activeTab === "Tab1" && (
          <div>
            <DirectNavToProject />
          </div>
        )}
      </div>

      <div>
        {activeTab === "Tab2" && (
          <div>
            <TabStudies project_id={projectId} />
          </div>
        )}
      </div>

      <div className="test-container">
        <table className="table text-wrap text-center table-hover">
          <thead className="thead-dark">
            <tr className="text-center">
              <th className="">Module ID</th>
              <th className="">Project ID</th>
              <th className="">Module #</th>
              <th className="">Manufacturer</th>
              <th className="">Series</th>
              <th className="">Model #</th>
              <th className="">Chemistry</th>
              <th className="">Mono or BiFacial</th>
              <th className="">Cells</th>
              <th className="">Frame</th>
              <th className="">Connector</th>
              <th className="">Frame Width</th>
              <th className="">Frame Length</th>
              <th className="">Lead Length</th>
              <th className="">Max Voltage</th>
              <th className="">Max Power</th>
              <th className="">Open Circuit Voltage</th>
              <th className="">Short Circuit Current</th>
              <th className="">Max Power Current</th>
              <th className="">Module Efficiency</th>
              <th className="">Max Series Fuse Rating</th>
              <th className="">Power Output Tolerance</th>
              <th className="">Voc & IscTolerance</th>
              <th className="">NMOT</th>
              <th className="">Coeficient of Isc</th>
              <th className="">Coeficient of Voc</th>
              <th className="">Coeficient of Pmax</th>
              <th className="">String Size</th>
              <th className="">3-hr Avg Max, Front Side</th>
              <th className="">3-hr Avg Max, w BiFacial Gain</th>
              <th className="">BiFacial Gain</th>
              <th className="">Modeling Buffer</th>
            </tr>
          </thead>
          <tbody>{modulesJSX()}</tbody>
        </table>
      </div>
      {/* <div>{console.log(modules[0])}</div> */}
    </div>
  );
}
