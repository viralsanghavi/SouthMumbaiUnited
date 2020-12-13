import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
const Map = () => {
  const position = [18.946920732314933, 72.79485844101724];
  return (
    <div className="map">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; South Mumbai United"
          maxZoom={18}
          tileSize={512}
          zoomOffset={-1}
        />
        <Marker position={position}>
          <Popup>
            SEA VIEW, 6TH FLOOR, DONGERSI RD. MALABAR HILL, MUMBAI - 400006
            SOUTH MUMBAI
          </Popup>
        </Marker>
      </MapContainer>

      {/* <MapContainer>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          position={position}
        />
      </MapContainer> */}
    </div>
  );
};

export default Map;
