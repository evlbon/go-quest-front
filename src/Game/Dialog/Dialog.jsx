import React, {useState} from 'react';
import GameChar from "./GameChar";
import BubbleBox from "./BubbleBox"
import './Dialog.css'
import {imageBase} from "../../config";

const Dialog = ({next, position, char, text, background, actions, choose = 1}) => {
    return <div
        className='Dialog'
        style={{backgroundImage: `url('${imageBase}/${background}')`}}
        onClick={() => actions && actions.length?'':next()}
    >
        <GameChar position={position} char={char}/>

        <BubbleBox
            position={position}
            text={text}
            choose={choose}
            actions={actions}
            onSelect={next}
        />
    </div>
};

export default Dialog;