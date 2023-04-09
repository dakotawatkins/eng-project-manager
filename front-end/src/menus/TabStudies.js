import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function TabStudies({ project_id }) {
  const [activeTab, setActiveTab] = useState("");

  return (
    <div className="flex text-center">
      <h4>STUDIES</h4>
      <div>
        <button className="proj-btn">
          <Link to={`/projects/${project_id}/hv`}>High Voltage</Link>
        </button>
        <button className="proj-btn">
          <Link to={`/projects/${project_id}/mv-circuits`}>MV Circuits</Link>
        </button>
        <button className="proj-btn">
          <Link to={`/projects/${project_id}/modules`}>Modules</Link>
        </button>
      </div>
    </div>
  );
}
