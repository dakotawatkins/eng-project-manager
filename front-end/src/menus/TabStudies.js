import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function TabStudies({ project_id }) {
  const [activeTab, setActiveTab] = useState("");

  return (
    <div className="test-container">
      <div className="proj-list-left">
        <h4>Studies</h4>
        <div>
          <div>
            <Link to={`/projects/${project_id}/hv`} className="proj-btn">
              High Voltage
            </Link>
          </div>
          <div>
            <Link
              to={`/projects/${project_id}/mv-circuits`}
              className="proj-btn"
            >
              MV Circuits
            </Link>
          </div>
          <div>
            <Link to={`/projects/${project_id}/modules`} className="proj-btn">
              Modules
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
