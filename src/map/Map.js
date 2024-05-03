import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -34.397,
  lng: 150.644
};

function Map() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyC4lb29yLHAhSqWB-9Eg7GPEyTVo8heQ84" // Replace with your API key
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Child components like markers, info windows, etc. */}
      </GoogleMap>
    </LoadScript>
  )
}

export default Map
