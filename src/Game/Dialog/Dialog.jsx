import React, {useEffect, useState} from 'react';
import GameChar from "./GameChar";
import BubbleBox from "./BubbleBox"
import './Dialog.css'
import {imageBase} from "../../config";

const Dialog = ({next, position, char, text, background, actions, choose = 1}) => {
    const [available, setAvailable] = useState(false);
    useEffect(() => {
        return setTimeout(()=>{
            setAvailable(true)
        },500)
    }, [text])

    const limitedNext = (...props) => {
        if(available){
            setAvailable(false)
            next(...props)
        }
    }

    return <div
        className='Dialog'
        style={{backgroundImage: `url('${imageBase}/back/${background}')`, backgroundSize: '100%'}}
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