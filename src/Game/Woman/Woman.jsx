import React, {useState} from 'react';
import {useArraySelect} from "../../utils/useArraySelect";
import WomanSelector from "../Menu/WomanSelector";
import MenuBox from "../Menu/MenuBox";
import ProtagonistThought from "../../gameplay/PseudoSelect/ProtagonistThought";


const Woman = ({next, qwe}) => {
    const [name, setName] = useState('')
    const [thoughtVisible, setThoughtVisible] = useState(true);

    return (
        <div className="Menu"
             style={{backgroundImage: 'url(/menu_back.png)'}}
        >

            <div className="Menu-header">
                {/*{name}*/}
                <WomanSelector onChange={setName}/>
            </div>


            {/*<div style={{height: '30%'}}>{info.message}</div>*/}
            {thoughtVisible && <ProtagonistThought text="Для того, чтобы вернуться в прошлоем и помочь женщине с ребёнком нужно вспомнить её имя" onClick={()=>setThoughtVisible(false)}/>}
            <MenuBox items={
                name==='Вероника'

                    ?[
                        {
                            image: 'woman_in_park.png',
                            playable: true,
                            play: next,
                            closable: true
                        }
                    ]
                    :[]

            }/>
        </div>
    )
}

export default Woman;