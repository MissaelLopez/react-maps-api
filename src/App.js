import { useJsApiLoader } from "@react-google-maps/api";
import { useState } from "react";
import Form from "./componentes/Form";
import Map from "./componentes/Map";
import { Contenedor } from "./elementos/Formularios";

const App = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries: ["places"],
  });

  const origin =
    "Universidad Tecnológica De La Selva, Camino a Tonina, Chiapas, México";
  const [data, setData] = useState({ nombre: "", celular: "", email: "" });
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const [cost, setCost] = useState(0);

  const clearRoute = () => {
    console.log(directionsResponse);
    setDirectionsResponse(null);
    setDistance(null);
    setDuration(null);
  };

  const calculatePrice = (distance) => {
    if (distance <= 100) {
      setCost(100);
    }

    if (distance > 100 && distance <= 200) {
      setCost(130);
    }

    if (distance > 200 && distance <= 400) {
      setCost(170);
    }

    if (distance > 400 && distance <= 700) {
      setCost(210);
    }

    if (distance > 700 && distance <= 1000) {
      setCost(1250);
    }

    if (distance > 1000) {
      setCost(350);
    }
  };

  const calculateRoute = async (origin, destination) => {
    const directionsService = new window.google.maps.DirectionsService();
    const results = await directionsService.route({
      origin,
      destination,
      travelMode: window.google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
    calculatePrice(parseFloat(results.routes[0].legs[0].distance.text));
  };

  const handleSubmit = (e) => {
    clearRoute();
    e.preventDefault();
    const obj = {
      nombre: e.target.nombre.value,
      email: e.target.email.value,
      celular: e.target.celular.value,
      address: e.target.address.value,
    };
    setData(obj);
    calculateRoute(origin, obj.address);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  }

  return isLoaded ? (
    <main>
      <Contenedor>
        <Form
          clearRoute={clearRoute}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          origin={origin}
          data={data}
          distance={distance}
          duration={duration}
          cost={cost}
        />
        <Map directionsResponse={directionsResponse} />
      </Contenedor>
    </main>
  ) : (
    <></>
  );
};

export default App;
