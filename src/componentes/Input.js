import React from "react";
import { Input, Containertwo, Label, Span} from './../elementos/Formularios';

const ComponenteInput = ({tipo, nombre, label}) => {
    return (
        <Containertwo>
            <Input type={tipo} id={nombre} placeholder=" " />
            <Label for={nombre}>{label}:</Label>
            <Span></Span>
        </Containertwo>
    );
}


export default ComponenteInput;
