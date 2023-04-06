import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export function NavBarTop() {
  return (
    <div className="navbar mx-2">
      <div>
        <Link to="/">
          <img className="nav-logo" src={logo} />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/">HOME</Link>
        <Link to="/equipment">EQUIPMENT</Link>
        <Link to="">REFERENCES</Link>
        <Link to="">CLIENTS</Link>
        <Link to="">ACAD</Link>
      </div>
    </div>
  );
}
