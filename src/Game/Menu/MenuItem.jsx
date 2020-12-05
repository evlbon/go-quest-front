import React, {useEffect, useState} from 'react';
import './MenuItem.css';

const MenuItem = ({image, onClick, hover = false}) => {

    return(
        <div className={`MenuItem ${!!onClick&&'hoverable'} ${hover&&'hovered'} `} onClick={onClick}>

            <img src={image}/>
            <div className={`MenuItem-mask`}/>

            {/*{}*/}
        </div>
    )
};

export default MenuItem;