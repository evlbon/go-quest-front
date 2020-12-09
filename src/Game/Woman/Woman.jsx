import React, {useState} from 'react';
import {useArraySelect} from "../../utils/useArraySelect";
import WomanSelector from "../Menu/WomanSelector";
import MenuBox from "../Menu/MenuBox";


const Woman = ({next}) => {
    const [name, setName] = useState('')

    return (
        <div className="Menu"
             style={{backgroundImage: 'url(/menu_back.png)'}}
        >

            <div className="Menu-header">
                {name}
                <WomanSelector onChange={setName}/>
            </div>


            {/*<div style={{height: '30%'}}>{info.message}</div>*/}

            <MenuBox items={
                name==='Лиля'

                    ?[
                        {
                            image: 'https://thiscatdoesnotexist.com/',
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