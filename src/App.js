import React from "react";
import {Titulo, Containerone, Parrafo, Contenedor, Formulario, Mapa, Enviar} from './elementos/Formularios';
import ComponenteInput from './componentes/Input';

const App = () => {
  return (
   <main>
      <Contenedor>
        <Formulario action=''>
          <Titulo>Distancia de envío</Titulo>
          <Containerone>
            <Parrafo>Datos de contacto</Parrafo>
            <ComponenteInput
              tipo='text'
              nombre='nombre'
              label='Nombre completo'
            />
            <ComponenteInput
              tipo='email'
              nombre='email'
              label='Email'
            />
            <ComponenteInput
              tipo='text'
              nombre='celular'
              label='Número de celular'
            />

            <Parrafo>Dirección de envío</Parrafo>
            <ComponenteInput
              tipo='text'
              nombre='cp'
              label='Código Postal'
            />
            <ComponenteInput
              tipo='text'
              nombre='estado'
              label='Estado'
            />
            <ComponenteInput
              tipo='text'
              nombre='municipio'
              label='Municipio'
            />
            <ComponenteInput
              tipo='text'
              nombre='ciudad'
              label='Ciudad'
            />
            <ComponenteInput
              tipo='text'
              nombre='colonia'
              label='Colonia'
            />
            <ComponenteInput
              tipo='text'
              nombre='calle'
              label='Calle'
            />
            <ComponenteInput
              tipo='text'
              nombre='numero'
              label='Número'
            />
            <Enviar type="submit" class="form__submit" value="Calcular envío" />
          </Containerone>
        </Formulario>
        <Mapa></Mapa>
      </Contenedor>
   </main> 
  );
}


export default App;
