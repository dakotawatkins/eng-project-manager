import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { listMvCircuits } from "../utils/api";
import DirectNavToProject from "../menus/DirectNavToProject";
import TabStudies from "../menus/TabStudies";
import MvCircuits from "../studyComponents/MvCircuits";

export default function StudyMvCircuits() {
  const { projectId } = useParams();

  const [mvCircuits, setMvCircuits] = useState([]);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("Tab2");

  function loadMvCircuits(projectId) {
    setError(null);
    const abortController = new AbortController();
    listMvCircuits(projectId, abortController.signal)
      .then(setMvCircuits)
      .catch(setError);
    return () => abortController.abort();
  }

  useEffect(() => {
    loadMvCircuits(projectId);
  }, [projectId]);

  /** iterates each transmissionLineJSX and returns a 'TransmissionLine' */
  const mvCircuitsJSX = () => {
    return mvCircuits.map(
      (circuit) =>
        circuit.project_id == projectId && (
          <MvCircuits
            key={circuit.mv_unique_id}
            circuit={circuit}
            projectId={projectId}
          />
        )
    );
  };

  return (
    <div>
      <div className="proj-list-left-2">
      <DirectNavToProject />
        <div className="proj-tabs">
          {/* <button
            className={`${"tab"}`}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab("Tab1");
              console.log(activeTab, "Tab1");
            }}
          >
            Projects
          </button> */}

          <button
            className={`${"tab"}`}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab("Tab2");
              console.log(activeTab, "Tab2");
            }}
          >
            IO Sheets
          </button>
          <button className={`${"tab"}`}>ACAD</button>
          <button className={`${"tab"}`}>BOM's</button>
        </div>

        <div className="proj-stud">
          {/* {activeTab === "Tab1" && <DirectNavToProject /> } */}

          {activeTab === "Tab2" && <TabStudies project_id={projectId} />}
        </div>
      </div>

      <div className="proj-disp overflow-scroll">
        <h1>D - MV Circuits</h1>
        <table className="table text-nowrap text-center table-hover">
          <thead className="thead-dark">
            <tr className="text-center">
              <th className="">MV Unique ID</th>
              <th className="">MV ID</th>
              <th className="">Project ID</th>
              <th className="">PPA</th>
              <th className="">MPT</th>
              <th className="">Breaker Bay</th>
              <th className="">Termination</th>
              <th className="">Previous Feeder ID</th>
              <th className="">From</th>
              <th className="">To</th>
              <th className="">Schedule Order</th>
              <th className=""># Of Skids</th>
              <th className="">Cable Size Iterate</th>
              <th className="">Hyperlink Tag from CAD</th>
              <th className="">Pt to Pt Circuit Length from CAD</th>
              <th className="">ETAP Bus</th>
              <th className="">3PH SC Value from ETAP (kA)</th>
              <th className="">L-G SC Value from ETAP (kA)</th>
              <th className="">L-L SC Value from ETAP (kA)</th>
              <th className="">LLG SC Value from ETAP (kA)</th>
            </tr>
          </thead>
          <tbody className="text-nowrap">{mvCircuitsJSX()}</tbody>
        </table>
      </div>
      {/* {console.log(mvCircuits[0])} */}
    </div>
  );
}
