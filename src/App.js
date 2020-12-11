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
    '/login_head.png',
    '/reg_back.png',
    '/street.png',
    '/swimming_pool.png',
    '/tattoo.png',
    '/tattoo_salon.png',
    '/waiting_room_hiv_center.png',
    '/woman_in_park.png',
    '/woman_with_children.png',
    '/back/airplane_salon.png',
    '/back/bar_out.png',
    '/back/beach.png',
    '/back/doctor_room.png',
    '/back/entrance.png',
    '/back/graduation.png',
    '/back/gym.png',
    '/back/hostel.png',
    '/back/kids-camp.png',
    '/back/mall.png',
    '/back/museum.png',
    '/back/park.png',
    '/back/protagonist_room.png',
    '/back/saloon.png',
    '/back/snowman.png',
    '/back/storage_cells.png',
    '/back/street.png',
    '/back/tattoo_salon.png',
    '/back/waiting_room_hiv_center.png',
    '/back/ward.png',
    '/back/yard.png',
    '/chars/admin.png',
    '/chars/asya.png',
    '/chars/doctor.png',
    '/chars/fatty.png',
    '/chars/gleb.png',
    '/chars/kamilla.png',
    '/chars/makar.png',
    '/chars/miss.png',
    '/chars/nurse.png',
    '/chars/protagonist_casual.png',
    '/chars/protagonist_formal.png',
    '/chars/protagonist_sport.png',
    '/chars/protagonist_winter.png',
    '/chars/serg_casual.png',
    '/chars/serg_winter.png',
    '/chars/stewr.png',
    '/chars/stranger.png',
    '/chars/surgeon.png',
    '/chars/system.png',
    '/chars/tattoo_master.png',
    '/chars/woman_with_children.png'
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
