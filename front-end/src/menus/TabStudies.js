import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function TabStudies({ project_id }) {
  const [activeTab, setActiveTab] = useState("");

  return (
    <div className="flex text-center">
      <h4>IO Sheets</h4>
      <div>
        <button className="proj-btn">
          <Link to={`/projects/${project_id}/hv`}>I - High Voltage</Link>
        </button>
        
        <button className="proj-btn">
          <Link to={`/projects/${project_id}/modules`}>I - Modules</Link>
        </button>
        <button className="proj-btn">I - Conventions</button>
        <button className="proj-btn">I - Codes / Standards</button>
        <button className="proj-btn">I - MV Cable</button>
        <button className="proj-btn">I - PCU's</button>
        <button className="proj-btn">I - PV Wire</button>
        <button className="proj-btn">I - Racking</button>
        <button className="proj-btn">S - Amp</button>
        <button className="proj-btn">S - SC (Mv)</button>
        <button className="proj-btn">S - SC (GND)</button>
        <button className="proj-btn">S - RP</button>
        <button className="proj-btn">S - PV System</button>
        <button className="proj-btn">S - Equiv Z</button>

        <button className="proj-btn">
          <Link to={`/projects/${project_id}/mv-circuits`}>D - MV Circuits</Link>
        </button>
        <button className="proj-btn">D - Fiber Circuits</button>
        <button className="proj-btn">D - DC Homeruns</button>
        <button className="proj-btn">D - Motor Circuits</button>
        <button className="proj-btn">D - DC String Wiring</button>
        <button className="proj-btn">D - DC Trench</button>
        <button className="proj-btn">D - DC Quantities</button>
        <button className="proj-btn">D - Cab Loading</button>
      </div>
    </div>
  );
}
