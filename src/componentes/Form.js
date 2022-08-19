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
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Details from "./Details";

const Form = (props) => {
  const MySwal = withReactContent(Swal);

  const openModal = () => {
    MySwal.fire({
      width: '800px',
      title: "Aviso de Privacidad",
      html: `<p style="text-align: justify;">EnviosApp, con domicilio en Calle 5 de Mayo, 391, Col. Los Pinos III, Ocosingo, Chiapas, México y portal de internet http://localhost:3000/, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:</p>
      <br>
      <p style="text-align: justify; font-weight: bold;">¿Para qué fines utilizaremos sus datos personales?</p>
      <p style="text-align: justify;">Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:</p>
      <br>
      <p style="text-align: justify;">* Envío de productos adquiridos en esta tienda en línea</p>
      <p style="text-align: justify;">* Guardar la información del cliente para realizar futuros envíos</p>
      <br>
      <p style="text-align: justify; font-weight: bold;">¿Qué datos personales utilizaremos para estos fines?</p>
      <p style="text-align: justify;">Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales:</p>
      <br>
      <p style="text-align: justify;">* Datos de identificación y contacto</p>
      <br>
      <p style="text-align: justify; font-weight: bold;">¿Cómo puede acceder, rectificar o cancelar sus datos personales, u oponerse a su uso o ejercer la revocación de consentimiento?
      </p>
      <p style="text-align: justify;">Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.</p>
      <br>
      <p style="text-align: justify;">Para el ejercicio de cualquiera de los derechos ARCO, debe enviar una petición vía correo electrónico a missaellopez.al@laselva.edu.mx y deberá contener:</p>
      <br>
      <p style="text-align: justify;">* Nombre completo del titular.
      </p>
      <p style="text-align: justify;">* Datos de identificación y contacto</p>
      <p style="text-align: justify;">* Domicilio</p>
      <p style="text-align: justify;">* Teléfono</p>
      <p style="text-align: justify;">* Correo electrónico usado en este sitio web.</p>
      <p style="text-align: justify;">* Copia de una identificación oficial adjunta.</p>
      <p style="text-align: justify;">* Asunto «Derechos ARCO»</p>
      <br>
      <p style="text-align: justify;">Descripción el objeto del escrito, los cuales pueden ser de manera enunciativa más no limitativa los siguientes: Revocación del consentimiento para tratar sus datos personales; y/o Notificación del uso indebido del tratamiento de sus datos personales; y/o Ejercitar sus Derechos ARCO, con una descripción clara y precisa de los datos a Acceder, Rectificar, Cancelar o bien, Oponerse. En caso de Rectificación de datos personales, deberá indicar la modificación exacta y anexar la documentación soporte; es importante en caso de revocación del consentimiento, que tenga en cuenta que no en todos los casos podremos atender su solicitud o concluir el uso de forma inmediata, ya que es posible que por alguna obligación legal requiramos seguir tratando sus datos personales. Asimismo, usted deberá considerar que para ciertos fines, la revocación de su consentimiento implicará que no le podamos seguir prestando el servicio que nos solicitó, o la conclusión de su relación con nosotros.</p>
      <br>
      <p style="text-align: justify;">¿En cuántos días le daremos respuesta a su solicitud?</p>
      <p style="text-align: justify;">5 Días</p>
      <br>
      <p style="text-align: justify;">¿Por qué medio le comunicaremos la respuesta a su solicitud?</p>
      <p style="text-align: justify;">Al mismo correo electrónico de donde se envío la petición.</p>
      <br>
      <p style="text-align: justify; font-weight: bold;">El uso de tecnologías de rastreo en nuestro portal de internet
      </p>
      <p style="text-align: justify;">Le informamos que en nuestra página de internet utilizamos cookies, web beacons u otras tecnologías, a través de las cuales es posible monitorear su comportamiento como usuario de internet, así como brindarle un mejor servicio y experiencia al navegar en nuestra página. Los datos personales que obtenemos de estas tecnologías de rastreo son los siguientes:</p>
      <br>
      <p style="text-align: justify;">Identificadores, nombre de usuario y contraseñas de sesión, Región en la que se encuentra el usuario</p>
      <br>
      <p style="text-align: justify;">Estas cookies, web beacons y otras tecnologías pueden ser deshabilitadas. Para conocer cómo hacerlo, consulte el menú de ayuda de su navegador. Tenga en cuenta que, en caso de desactivar las cookies, es posible que no pueda acceder a ciertas funciones personalizadas en nuestros sitio web.</p>
      <br>
      <p style="text-align: justify; font-weight: bold;">¿Cómo puede conocer los cambios en este aviso de privacidad?
      </p>
      <br>
      <p style="text-align: justify;">El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios en nuestro modelo de negocio, o por otras causas. Nos comprometemos a mantener actualizado este aviso de privacidad sobre los cambios que pueda sufrir y siempre podrá consultar las actualizaciones que existan en el sitio web http://localhost:3000/.</p>
      <br>
      <p style="text-align: justify;">Última actualización de este aviso de privacidad: 19/08/2022</p>
      `,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };

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
        <>
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
              <Enviar
                type="submit"
                class="form__submit"
                value="Calcular envío"
              />
            </Containerone>
          </form>
          <br />
          <button onClick={openModal} className="cursor-pointer">
            Aviso de privacidad
          </button>
        </>
      )}
    </Formulario>
  );
};

export default Form;
