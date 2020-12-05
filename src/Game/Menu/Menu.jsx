import React from "react";
import MenuBox from "./MenuBox";
import './MenuBox.css';

const Menu = ({items, defCurrentItem, info}) => {
    return (
        <div>
            <div style={{height: '30%'}}>{info.message}</div>
            <MenuBox items={items} defCurrentItem={defCurrentItem}/>
        </div>
    )
}

export default Menu;