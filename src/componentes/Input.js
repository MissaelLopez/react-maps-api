import React from "react";
import { Input, Containertwo, Label, Span } from "./../elementos/Formularios";

const ComponenteInput = ({ tipo, nombre, label, validateKey }) => {
  return (
    <Containertwo>
      <Input
        maxLength={nombre === "celular" ? "10" : "100"}
        minLength={nombre === "celular" ? "10" : "0"}
        required
        type={tipo}
        id={nombre}
        placeholder=" "
        onKeyDown={validateKey}
      />
      <Label htmlFor={nombre}>{label}:</Label>
      <Span></Span>
    </Containertwo>
  );
};

export default ComponenteInput;
