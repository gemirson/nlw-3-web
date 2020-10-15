import React, { useEffect, useState } from "react";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import Leaflet from "leaflet";

import mapmarkerImg from "../assets/images/map-marker.svg";

import "../assets/styles/pages/ophanagesMap.css";
import "leaflet/dist/leaflet.css";
import api from "../services/api";

const mapIcon = Leaflet.icon({
  iconUrl: mapmarkerImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [172, 2]
});

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function OphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get("orphanage").then(response => {
      console.log(response.data);
      setOrphanages(response.data);
    });
  }, []);

  if(!orphanages){
    return (<h1>Carregando</h1>)
  }
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapmarkerImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita</p>
        </header>

        <footer>
          <strong>São Paulo</strong>
          <span>São Paulo</span>
        </footer>
      </aside>
      <Map
        center={[-23.5874162, -46.6598223]}
        zoom={17}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        {
         orphanages.map(orphanage => {
          return (
            <Marker
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
              key={orphanage.id}
            >
              <Popup
                className="map-popup"
                closeButton={false}
                minWidth={240}
                maxWidth={240}
              >
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#FFF" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>
      <Link to="/orphanages" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OphanagesMap;
