import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const logoTitle = "<Zavdev>";

  return (
    <>
      <header>
        <div className="navbar-container-main">
          <div className="navbar-container">
            <div className="navbar-logo">
              <span>{logoTitle}</span>
            </div>
            <div className="navbar-buttons">
              <Link className="btn-log" to="/">
                Iniciar sesión
              </Link>
              <Link className="btn-reg" to="/">
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
