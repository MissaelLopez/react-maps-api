import React from "react";

const styles = {
  title: {
    color: "#3866f2",
    fontSize: ".8rem",
  },
  value: {
    fontSize: ".9rem",
    margin: ".5rem",
  },
  button: {
    backgroundColor: "#3866f2",
    fontFamily: "Roboto, sans-serif",
    color: "#fff",
    fontWeight: "300",
    fontSize: "1rem",
    padding: ".8em 2em",
    border: "1.5px solid #3866f2",
    borderRadius: ".5em",
    cursor: "pointer",
  },
};

const Details = (props) => {
  return (
    <div>
      <br />
      <p style={styles.title}>Nombre:</p>
      <p style={styles.value}>{props.data.nombre}</p>
      <p style={styles.title}>Email:</p>
      <p style={styles.value}>{props.data.email}</p>
      <p style={styles.title}>Teléfono:</p>
      <p style={styles.value}>{props.data.celular}</p>
      <p style={styles.title}>Origen:</p>
      <p style={styles.value}>{props.origin}</p>
      <p style={styles.title}>Destino:</p>
      <p style={styles.value}>{props.data.address}</p>
      <p style={styles.title}>Distancia:</p>
      <p style={styles.value}>{props.distance}</p>
      <p style={styles.title}>Duración de entrega:</p>
      <p style={styles.value}>{props.duration}</p>
      <p style={styles.title}>Costo de envío:</p>
      <p style={styles.value}>{`$ ${props.cost}`}</p>
      <a href="/">
        <button style={styles.button}>Calcular otro envío</button>
      </a>
    </div>
  );
};

export default Details;
