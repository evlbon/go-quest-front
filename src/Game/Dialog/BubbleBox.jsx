import React, {useEffect, useState} from "react";
import './BubbleBox.css';

const BubbleBox = ({position, text, actions = [], onSelect, choose}) => {
    const [visible,setVisible] = useState(false);
    const [selectedActions, setSelectedActions] = useState([]);

    useEffect(()=>{
        setVisible(false)
        setTimeout(()=>setVisible(true),10)
    },[position])

    const handleSelect = (action) => {
        if(choose===1) onSelect(action);
        if(selectedActions.length < choose)
            setSelectedActions(prev => {
                const newActions = [...prev];
                const selectedActionIndex = newActions.findIndex(i => i === action);

                if(selectedActionIndex === -1) newActions.push(action);
                else newActions.splice(selectedActionIndex, 1);
                return newActions
        })
    }

    // if(selectedActions.length === choose) onSelect(selectedActions);

    if(!visible)
        return <></>

    return <div
        className={`BubbleBox ${position}`}
    >
        <div className={`BubbleBox-head`}/>


        <div className={`BubbleBox-body`}>
            {text}
        </div>
        <div className={`BubbleBox-actions`}>
            {actions && actions.map((action, index) => (
                <div
                    key={index}
                    onClick={() => handleSelect(action)}
                    className={`BubbleBox-actions-button ${selectedActions.includes(action)?'selected': ''}`}>
                    {action}
                </div>
            ))}
        </div>
    </div>
}

export default BubbleBox