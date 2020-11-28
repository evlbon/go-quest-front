import React, {useState} from "react";
import './Game.css'
import GameChar from "./GameChar";


const GameBox = () => {
    const [pos, setPos] = useState('left')
    const [char, setChar] = useState('shrek.png')

    return <div
        className='GameBox'
        onClick={()=>{
            setChar(char => char==='shrek.png'? 'gta.png':'shrek.png')
            setPos(pos => pos==='left'? 'right':'left')
        }}
    >
        <GameChar position={pos} char={char}/>
    </div>
}

export default GameBox