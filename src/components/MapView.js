import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Polyline, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "../App.css";

const vehicleIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
});

function MapView() {
  const [route, setRoute] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    fetch("/dummy-route.json")
      .then((res) => res.json())
      .then((data) => setRoute(data));
  }, []);

  useEffect(() => {
    if (!isPlaying || currentIdx >= route.length - 1) return;
    const interval = setInterval(() => {
      setCurrentIdx((idx) => Math.min(idx + 1, route.length - 1));
    }, 1500);
    return () => clearInterval(interval);
  }, [isPlaying, route, currentIdx]);

  if (route.length === 0) return <div>Loading...</div>;

  const position = [route[currentIdx].latitude, route[currentIdx].longitude];
  const path = route.slice(0, currentIdx + 1).map((p) => [p.latitude, p.longitude]);

  let speed = "N/A";
  if (currentIdx > 0) {
    const prev = route[currentIdx - 1];
    const curr = route[currentIdx];
    const dt = (new Date(curr.timestamp) - new Date(prev.timestamp)) / 1000;
    const dx = L.latLng(prev.latitude, prev.longitude).distanceTo(
      L.latLng(curr.latitude, curr.longitude)
    );
    speed = dt ? (dx / dt).toFixed(2) + " m/s" : "N/A";
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#222" }}>
        Vehicle Route Simulation
      </h1>

      <div className="map-page">
        <div className="map-card">
          <h2>Vehicle Movement Tracker</h2>

          <MapContainer center={position} zoom={15} style={{ height: "400px", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Polyline positions={path} color="red" />
            <Marker position={position} icon={vehicleIcon}>
              <Popup>
                Vehicle<br />Lat: {position[0]}<br />Lng: {position[1]}
              </Popup>
            </Marker>
          </MapContainer>

          <button onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? "Pause" : "Play"}
          </button>

          <div className="info">
            <b>Latitude:</b> {position[0]}<br />
            <b>Longitude:</b> {position[1]}<br />
            <b>Timestamp:</b> {route[currentIdx].timestamp}<br />
            <b>Speed:</b> {speed}<br />
            <b>Step:</b> {currentIdx + 1} / {route.length}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapView;
