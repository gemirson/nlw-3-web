import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom'
import {Map,TileLayer} from 'react-leaflet'

import mapmarkerImg from '../assets/images/map-marker.svg'

import '../assets/styles/pages/ophanagesMap.css'
import 'leaflet/dist/leaflet.css';

function OphanagesMap(){
  return(
      <div id ="page-map">
        <aside>
            <header>
                <img src={mapmarkerImg} alt="Happy"/>
                <h2>Escolha um orfanato no mapa</h2>
                <p>Muitas crianças estão esperando a sua visita</p>
            </header>

            <footer>
              <strong>São Paulo</strong>
              <span>São Paulo</span>
            </footer>
        </aside>
        <Map 
        center={[-23.5874162,-46.6598223]}
        zoom={17}
        style={{width:'100%', height:'100%'}}
        >
         <TileLayer 
         url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
        </Map>
         <Link to="/app" className="create-orphanage">
           <FiPlus size={26} color ="rgba(0,0,0,0.6)"/>
      </Link>
      </div>
      
  );

}

export default OphanagesMap;