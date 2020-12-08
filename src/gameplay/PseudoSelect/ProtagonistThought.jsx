import React from 'react';
import './ProtagonistThought.css'

const ProtagonistThought = ({text, onClick}) => {

    return (
        <div className="ProtagonistThought-back">
            <div
                className="ProtagonistThought"
                // style={{backgroundImage: 'url(/thought.png)'}}
            >
                <div className="ProtagonistThought-head">Мысль Андрея</div>
                {text}


                <button onClick={onClick}>Продолжить</button>

            </div>
        </div>
    )
};

export default ProtagonistThought;