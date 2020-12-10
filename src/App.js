import './App.css';
import GameBox from "./Game/GameBox";
import React from "react";
import {BaseRouter} from "./Router";
import Woman from "./Game/Woman/Woman";

const images = [
    '/airplane_salon.png',
    '/airport.png',
    '/beach.png',
    '/beach_saloon.png',
    '/cat.png',
    '/certificate.png',
    '/city_look.png',
    '/dining_room.png',
    '/doctor.png',
    '/doctor_room.png',
    '/forest.png',
    '/gym.png',
    '/hospital_chamber.png',
    '/index.js',
    '/kids_camp.png',
    '/museum.png',
    '/outdoors.png',
    '/outdoors_card.png',
    '/protagonist_casual.png',
    '/protagonist_formal.png',
    '/protagonist_sport.png',
    '/protagonist_winter.png',
    '/saloon.png',
    '/serg_casual.png',
    '/serg_winter.png',
    '/snowman.png',
    '/snowman_card.png',
    '/stewr.png',
    '/storage_cells.png',
    '/street.png',
    '/swimming_pool.png',
    '/tattoo.png',
    '/tattoo_salon.png',
    '/waiting_room_hiv_center.png',
    '/woman_in_park.png',
    '/woman_with_children.png'
]


function App() {
  return (
    <div className="App">
        <div style={{display: 'none'}}>
            {images.map(src => {
                return <img src={src}/>
            })}
        </div>
        <BaseRouter/>
    </div>
  );
}

export default App;
