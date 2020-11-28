import React, {useEffect, useState} from "react";

const GameChar = ({position, char}) => {
    const [visible,setVisible] = useState(false)
    useEffect(()=>{
        setVisible(false)
        setTimeout(()=>setVisible(true),10)
    },[char])


    if(!visible)
        return <></>

    return <div
        // style={{background: '/sherk.png'}}
        className={`GameChar ${position}`}>
        <img
            src={`/${char}`}
            alt={char}
            style={{width: '100%', height: '100%'}}
        />

    </div>
}

export default GameChar;