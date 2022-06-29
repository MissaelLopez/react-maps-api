import React from "react";
import ComponenteInput from "./Input";
import {
  Titulo,
  Containerone,
  Parrafo,
  Formulario,
  Enviar,
} from "../elementos/Formularios";
import { Autocomplete } from "@react-google-maps/api";
import Details from "./Details";

const Form = (props) => {
  const validateKey = (e) => {
    if (e.charCode >= 48 && e.charCode <= 57) {
      return true;
    }
    return false;
  };

  return (
    <Formulario action="">
      <Titulo>
        {props.distance || props.duration
          ? "Datos de envío"
          : "Detalles de envío"}
      </Titulo>
      {props.distance || props.duration ? (
        <Details
          clearRoute={props.clearRoute}
          cost={props.cost}
          origin={props.origin}
          data={props.data}
          distance={props.distance}
          duration={props.duration}
        />
      ) : (
        <form onSubmit={props.handleSubmit}>
          <Containerone>
            <Parrafo>Datos personales</Parrafo>
            <ComponenteInput
              tipo="text"
              nombre="nombre"
              label="Nombre completo"
            />
            <ComponenteInput tipo="email" nombre="email" label="Email" />
            <ComponenteInput
              tipo="text"
              nombre="celular"
              label="Número de teléfono"
              validateKey={validateKey}
            />

            <Parrafo>Dirección de envío</Parrafo>
            <Autocomplete>
              <ComponenteInput
                tipo="text"
                nombre="address"
                label="Dirección de envío"
              />
            </Autocomplete>
            <Enviar type="submit" class="form__submit" value="Calcular envío" />
          </Containerone>
        </form>
      )}
    </Formulario>
  );
};

export default Form;
