import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

export const FilialComponent = () => {
  const { isLoaded } = useJsApiLoader({
    id: "fastfood",
    googleMapsApiKey: "AIzaSyA8woqA8tz6dqom96WizRpQBcRJpq0F1lE",
  });
  return (
    <div>
      {isLoaded && (
        <GoogleMap
          id="fastfood"
          mapContainerStyle={{ width: "1745px", height: "100vh" }}
          center={{ lat: 41.311081, lng: 69.240562 }}
          zoom={13}
        >
          <Marker position={{ lat: 41.311081, lng: 69.240562 }} />
        </GoogleMap>
      )}
    </div>
  );
};

export default FilialComponent;
