import {
  DirectionsRenderer,
  GoogleMap,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import React, { useCallback, useState } from "react";
import { Mapa } from "../elementos/Formularios";

const containerStyle = {
  width: "700px",
  height: "500px",
};

const coordinates = {
  lat: 16.89601,
  lng: -92.06719,
};

const Map = (props) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries: ["places"],
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(coordinates);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <Mapa>
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          zoomControl: true,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        <Marker position={coordinates} />
        {props.directionsResponse && (
          <DirectionsRenderer directions={props.directionsResponse} />
        )}
      </GoogleMap>
    </Mapa>
  ) : (
    <></>
  );
};

export default Map;
