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
        <button className="proj-btn">Conventions</button>
        <button className="proj-btn">Codes / Standards</button>
        <button className="proj-btn">MV Cable</button>
        <button className="proj-btn">PCU's</button>
        <button className="proj-btn">PV Wire</button>
        <button className="proj-btn">Racking</button>
        <button className="proj-btn">Amp</button>
        <button className="proj-btn">SC (Mv)</button>
        <button className="proj-btn">SC (GND)</button>
        <button className="proj-btn">RP</button>
        <button className="proj-btn">PV System</button>
        <button className="proj-btn">Fiber Circuits</button>
        <button className="proj-btn">Equiv Z</button>
        <button className="proj-btn">DC Homeruns</button>
        <button className="proj-btn">Motor Circuits</button>
        <button className="proj-btn">DC String Wiring</button>
        <button className="proj-btn">DC Trench</button>
        <button className="proj-btn">DC Quantities</button>
        <button className="proj-btn">Cab Loading</button>
      </div>
    </div>
  );
}
