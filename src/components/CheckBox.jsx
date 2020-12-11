import React, {useState} from 'react';
import './CheckBox.css'

const CheckBox = () => {
    const [state, setState] = useState(false)

    return(
        <div
        style={{flexDirection: 'row'}}
            className="CheckBox"

        >
            <img
                onClick={()=>setState(!state)}
                alt="btn"
                src={state? "/off.png":"/on.png"}/>

            <span>Я даю согласие на обработку персональных данных.</span>

        </div>
    )
};

export default CheckBox;