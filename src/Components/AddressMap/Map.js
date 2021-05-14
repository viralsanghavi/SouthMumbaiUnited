import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./Map.css";

const Map = () => {
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    });
  }, []);
  const position = [18.946920732314933, 72.79485844101724];
  return (
    <div className="map">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="<a href='https://goo.gl/maps/iLvWNfF6KFuUUs6c9'> &copy; South Mumbai United</a>"
          maxZoom={18}
          tileSize={512}
          zoomOffset={-1}
          detectRetina={true}
        />
        <Marker position={position}>
          <Popup>
            <a
              className="addressLink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://goo.gl/maps/iLvWNfF6KFuUUs6c9"
            >
              SEA VIEW, 6TH FLOOR, DONGERSI RD. MALABAR HILL, MUMBAI - 400006
              SOUTH MUMBAI
            </a>
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
