import React from "react";
import "../hojas-de-estilo/BotonClear.css";

const BotonClear = (props) => {
  return (
    <button className="boton-clear" onClick={props.manejarClear}>
      Clear
    </button>
  );
};

export default BotonClear;
