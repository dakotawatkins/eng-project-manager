import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { listTransmissionLine } from "../utils/api";
import DirectNavToProject from "../menus/DirectNavToProject";
import TabStudies from "../menus/TabStudies";
import TransmissionLine from "../studyComponents/TransmissionLine";

export default function StudyHV() {
  const { projectId } = useParams();

  const [transmissionLine, setTransmissionLine] = useState({});
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("Tab2");

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

  function transmissionLineJSX() {
    return transmissionLine.map((tLine) => {
      <TransmissionLine
        key={tLine.transmission_line_unique_id}
        tLine={tLine}
      />;
    });
  }

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
        HV TESTING
        {/* {transmissionLineJSX()} */}
      </div>
    </div>
  );
}
