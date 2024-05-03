import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React, { useState, useEffect, useRef } from 'react';

function MapWithAMarker() {
  const [currentPosition, setCurrentPosition] = useState({
    lat: -34.397,
    lng: 150.644
  });

  const mapRef = useRef(null);  // Using a ref to access the GoogleMap instance

  useEffect(() => {
    const geoOptions = {
      enableHighAccuracy: true,  // High accuracy (GPS location when available)
      timeout: 10000,  // Maximum time before location retrieval times out
      maximumAge: 30000  // Maximum age of a cached position that still considers valid
    };

    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          const newPos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setCurrentPosition(newPos);
          if (mapRef.current) {
            mapRef.current.panTo(newPos);  // Pan the map to the new position
          }
        },
        (error) => {
          console.error("Error getting location: ", error);
        },
        geoOptions
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyC4lb29yLHAhSqWB-9Eg7GPEyTVo8heQ84" // Replace with your API key
      loadingElement={<div>Loading...</div>}
    >
      <GoogleMap
        mapContainerStyle={{ width: '400px', height: '400px' }}
        center={currentPosition}
        zoom={15}
        ref={mapRef}  // Assign the ref to the map
      >
        <Marker
          position={currentPosition}
        />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapWithAMarker;
