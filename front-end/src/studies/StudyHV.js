import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { listTransmissionLine } from "../utils/api";
import DirectNavToProject from "../menus/DirectNavToProject";
import TabStudies from "../menus/TabStudies";
import TransmissionLine from "../studyComponents/TransmissionLine";

export default function StudyHV() {
  const { projectId } = useParams();

  const [transmissionLine, setTransmissionLine] = useState([]);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("Tab2");

  //   function loadTransmissionLine(projectId) {
  //     setError(null);
  //     const abortController = new AbortController();
  //     readTransmissionLine(projectId, abortController.signal)
  //       .then(setTransmissionLine)
  //       .catch(setError);
  //     return () => abortController.abort();
  //   }

  //   useEffect(() => {
  //     loadTransmissionLine(projectId);
  //   }, [projectId]);

  function loadTransmissionLine(projectId) {
    setError(null);
    const abortController = new AbortController();
    listTransmissionLine(projectId, abortController.signal)
      .then(setTransmissionLine)
      .catch(setError);
    return () => abortController.abort();
  }

  useEffect(() => {
    loadTransmissionLine(projectId);
  }, [projectId]);

  /** iterates each transmissionLineJSX and returns a 'TransmissionLine' */
  const transmissionLineJSX = () => {
    return transmissionLine.map(
      (tLine) =>
        tLine.project_id == projectId && (
          <TransmissionLine
            key={tLine.transmission_line_unique_id}
            tLine={tLine}
            projectId={projectId}
          />
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
              <th className="">Transmission Line ID</th>
              <th className="">Section</th>
              <th className="">Project ID</th>
              <th className="">From</th>
              <th className="">To</th>
              <th className="">Distance</th>
              <th className="">Conductor Size</th>
              <th className="">Conductor Pos. Seq. Resistance</th>
              <th className="">Basis Temp. of Provided Resistance</th>
              <th className="">Normal Op. Temp of Conductor</th>
              <th className="">Bundle Size</th>
              <th className="">Additional Loading From Nearby Projects</th>
              <th className="">Nearby Project</th>
              <th className="">RRC Notes</th>
              <th className="">Client Notes</th>
            </tr>
          </thead>
          <tbody>{transmissionLineJSX()}</tbody>
        </table>
      </div>
    </div>
  );
}
