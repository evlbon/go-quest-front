import React from "react";
import MenuBox from "./MenuBox";
import './MenuBox.css';
import './Menu.css';
import {useArraySelect} from "../../utils/useArraySelect";

const Menu = ({items, defCurrentItem, onSelectEnd, needSelect}) => {
    const [selectedItems, selectItem] = useArraySelect(needSelect);

    return (
        <div className="Menu"
             style={{backgroundImage: 'url(/menu_back.png)'}}
        >
            {!!onSelectEnd && needSelect && needSelect !==2 &&
                <div className="Menu-header">
                    {selectedItems.length}/{needSelect};
                    <div onClick={()=>onSelectEnd(selectedItems)}>Подтвердить свой выбор</div>
                </div>
            }
            {/*<div style={{height: '30%'}}>{info.message}</div>*/}
            <MenuBox onSelect={selectItem} selectedItems={selectedItems} items={items} defCurrentItem={defCurrentItem}/>
        </div>
    )
}

export default Menu;