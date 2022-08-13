import { useJsApiLoader } from "@react-google-maps/api";
import { useState } from "react";
import Form from "./componentes/Form";
import Map from "./componentes/Map";
import { Contenedor } from "./elementos/Formularios";
import { calculateCost } from "./functions/calculateCost";

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
    setDirectionsResponse(null);
    setDistance(null);
    setDuration(null);
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
    setCost(calculateCost(parseFloat(results.routes[0].legs[0].distance.text.replace(/,/g, ''))));
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

  return isLoaded ? (
    <main>
      <Contenedor>
        <Form
          clearRoute={clearRoute}
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
