import React from "react";
import './Game.css'
import Dialog from "./Dialog/Dialog";
import Menu from "./Menu/Menu";

const GameBox = ({children}) => {
    return <div
        className='GameBox'
    >
        {children}
    </div>
}

export default GameBox