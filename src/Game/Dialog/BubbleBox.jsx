import React, {useEffect, useState} from "react";
import './BubbleBox.css';

const BubbleBox = ({position, text, actions = [], onSelect = a => console.log(a)}) => {
    const [visible,setVisible] = useState(false)
    useEffect(()=>{
        setVisible(false)
        setTimeout(()=>setVisible(true),10)
    },[position])



    if(!visible)
        return <></>

    return <div
        className={`BubbleBox ${position}`}
    >

        <div className={`BubbleBox-body`}>
            {text}
        </div>

        <div className={`BubbleBox-actions`}>
            {actions && actions.map(action => (
                <div
                    key={action}
                    onClick={()=>onSelect(action)}
                    className="BubbleBox-actions-button">
                    {action}
                </div>
            ))}
        </div>


    </div>
}

export default BubbleBox