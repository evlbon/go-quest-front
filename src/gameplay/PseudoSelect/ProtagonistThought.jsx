import React from 'react';
import './ProtagonistThought.css'

const ProtagonistThought = ({text, onClick}) => {

    return (
        <div className="ProtagonistThought" style={{backgroundImage: 'url(/thought.png)'}}>
            {text}

            <button onClick={onClick}>Продолжить</button>

        </div>
    )
};

export default ProtagonistThought;