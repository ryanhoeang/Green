import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: -2,
};
const center = {
  lat: 37.31920378121975,
  lng: -122.04475971659203,
};

const MyLocation = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "API KEY",
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div className="GoogleMaps">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
      >
        <Marker position={center} />
        <Marker
          position={{ lat: 37.31920378121975, lng: -122.04475971659203 }}
        />
        <Marker
          position={{ lat: 37.2883513171376, lng: -121.93419277426545 }}
          label={"4"}
        />
        <Marker
          position={{ lat: 37.3235670088853, lng: -122.00861204542807 }}
          label={"3"}
        />
        <Marker
          position={{ lat: 37.250206215516215, lng: -121.83289376077508 }}
          label={"2"}
        />
        <Marker
          position={{ lat: 37.33647317072588, lng: -121.88989878960754 }}
          label={"1"}
        />
      </GoogleMap>
    </div>
  );
};

export default MyLocation;
