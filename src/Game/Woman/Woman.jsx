import React, {useState} from 'react';
import {useArraySelect} from "../../utils/useArraySelect";
import WomanSelector from "../Menu/WomanSelector";
import MenuBox from "../Menu/MenuBox";

const Woman = ({onClick}) => {
    const [name, setName] = useState('')

    const items = [
        {
            image: 'https://thiscatdoesnotexist.com/',
            "id": "18",
            "firstDescription": "firstDescription",
            "secondDescription": "secondDescription",
            play: onClick
        }
    ]

    return (
        <div className="Menu"
             style={{backgroundImage: 'url(/menu_back.png)'}}
        >

            <div className="Menu-header">
                <WomanSelector onChange={setName}/>
            </div>

            {/*<div style={{height: '30%'}}>{info.message}</div>*/}
            <MenuBox items={name==='Лиля'?items:[]}/>
        </div>
    )
}

export default Woman;