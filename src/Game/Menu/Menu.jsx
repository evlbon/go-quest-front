import React from "react";
import MenuBox from "./MenuBox";
import './MenuBox.css';
import './Menu.css';

const Menu = ({items, defCurrentItem, info}) => {
    return (
        <div className="Menu"
             style={{backgroundImage: 'url(/menu_back.png)'}}
        >
            <div className="Menu-header"><img src={'/menu-head.png'}/></div>
            {/*<div style={{height: '30%'}}>{info.message}</div>*/}
            <MenuBox items={items} defCurrentItem={defCurrentItem}/>
        </div>
    )
}

export default Menu;