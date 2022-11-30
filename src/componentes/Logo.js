import React from "react";
import freeCodeCampLogo from "../../src/imagenes/freecode.png";
import "../hojas-de-estilo/Logo.css";

const Logo = () => {
  return (
    <div className="freecodecamp-logo-contenedor">
      <img
        src={freeCodeCampLogo}
        className="freecodecamp-logo"
        alt="Logo de freeCodeCamp"
      />
    </div>
  );
};

export default Logo;
