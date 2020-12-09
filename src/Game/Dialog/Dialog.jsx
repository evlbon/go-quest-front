import React, {useEffect, useState} from 'react';
import GameChar from "./GameChar";
import BubbleBox from "./BubbleBox"
import './Dialog.css'
import {imageBase} from "../../config";

const Dialog = ({next, position, char, text, background, actions, choose = 1}) => {
    const [available, setAvailable] = useState(false);
    useEffect(() => {
        console.log(`render - ${available}`)
        return setTimeout(()=>{
            setAvailable(true)
        },3000)
    }, [text])

    const limitedNext = (...props) => {
        console.log(`next - ${available}`)

        if(available){
            setAvailable(false)
            next(...props)
        }
    }

    return <div
        className='Dialog'
        style={{backgroundImage: `url('${imageBase}/${background}')`}}
        onClick={() => actions && actions.length?'':limitedNext()}
    >
        <GameChar position={position} char={char}/>

        <BubbleBox
            position={position}
            text={text}
            choose={choose}
            actions={actions}
            onSelect={limitedNext}
        />
    </div>
};

export default Dialog;