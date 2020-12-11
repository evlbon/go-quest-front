import React, {useEffect, useState} from 'react';
import './MenuItem.css';

const MenuItem = ({image, onClick, hover = false, isSelected}) => {

    return(
        <div className={`MenuItem ${isSelected&&'selected'} ${!!onClick&&'hoverable'} ${hover&&'hovered'} `} onClick={onClick}>

            <img
                className={`MenuItem-img`}
                src={`cards/${image}`}/>
            <img
                src={'/shadow.png'}
                className={`MenuItem-mask`}/>

            {/*{}*/}
        </div>
    )
};

export default MenuItem;