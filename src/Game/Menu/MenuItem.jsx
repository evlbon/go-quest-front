import React, {useEffect, useState} from 'react';
import './MenuItem.css';

const MenuItem = ({onClick}) => {
    const [i,setI] = useState('')
    useEffect(()=>{
        setTimeout(()=>{
            setI("https://thiscatdoesnotexist.com/")
        },Math.random()*3000)
    },[])

    return(
        <div className="MenuItem" onClick={onClick}>

            <img src={i}/>
            <div className="MenuItem-mask"/>

            {/*{}*/}
        </div>
    )
};

export default MenuItem;